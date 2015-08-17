Settings = {
	camera: {
		fov: 45,
		near: 0.1,
		far: 10000
	},

	orbitControls: {
		autoRotate: false,
		userRotateSpeed: 350,

		userPan: false,
		userPanSpeed: 0,

		minPolarAngle: Math.PI * 0.2,
		maxPolarAngle: Math.PI * 0.35,

		minDistance: 200,
		maxDistance: 200
	},

	world: {
		width: 1024,
		height: 1024,
		vertices: 32
	},

	boat: {
		dampening: 0.5,
		inertia: 0.99
	},

	texture: {
		scale: 0.25
	},

	water: {
		dampening: 0.9999,
		viscosity: 0.05
	},

	window: {}
}
Entity = function() {

}

Entity.prototype.tick = function() {

}

Entity.prototype.getModel = function() {
	return this.model;
}

Entity.prototype.getPosition = function() {
	return this.model.position;
}

Entity.prototype.getRotation = function() {
	return this.model.rotation;
}
Game = function() {
	Game.keys = {};

	Settings.window.width = window.innerWidth;
	Settings.window.height = window.innerHeight;

	Settings.camera.aspect = Settings.window.width / Settings.window.height;

	// scene
	Game.scene = new THREE.Scene();
	//Game.scene.fog = new THREE.Fog( 0xFFFFFF, 800, 900 );

	// camera
	Game.camera = new THREE.PerspectiveCamera(
		Settings.camera.fov,
		Settings.camera.aspect,
		Settings.camera.near,
		Settings.camera.far
	);
	Game.camera.position.x = 300;
	Game.camera.position.z = 400;
	Game.scene.add(Game.camera);

	// controls
	Game.controls = new THREE.OrbitControls(Game.camera);
	Game.controls = $.extend({}, Game.controls, Settings.orbitControls);
	Game.controls.center.y = 80;

	// renderer
	Game.renderer = new THREE.WebGLRenderer({ antialias: true });
	Game.renderer.setSize(Settings.window.width, Settings.window.height);
	$('#stage').append(Game.renderer.domElement);

	// light

	/*for(var i = 0; i < 3; i += 1) {
		for(var j = 0; j < 3; j += 1) {
			light = new THREE.PointLight(0xffffff, 1, 200);
			light.position.set((1024 / 3) * i - 512, 100, (1024 / 3) * j - 512);
			//Game.scene.add(light);
		}
	}*/

	light = new THREE.AmbientLight(0xffffff);
	Game.scene.add(light);


	Game.projector = new THREE.Projector();

	Game.mouse = {}

	for(var i = 1; i < 4; i += 1) {
		Game.mouse[i] = {
			active: false,
			used: false
		}
	}
	for(var i = 0; i < 200; i += 1) {
		Game.keys[i] = {
			active: false,
			used: false
		}
	}

	this.setup();
	this.tick();
}

Game.prototype.setup = function() {

	var image = $('#tileset')[0];
	Game.tileset = $('<canvas>')[0];
	Game.tileset.width = image.width;
	Game.tileset.height = image.height;
	$('#backstage').append(Game.tileset);
	Game.tileset.getContext('2d').drawImage(image, 0, 0);

	Game.world = new World();
	Game.block = new Block();
	Game.boat = new Boat();
	Game.boat.model.position.set(300, 0, 220);
	Game.boat.force.rotation.y = Math.PI * 1.1;
	Game.boat.model.rotation.y = Math.PI * 1.1;
	//Game.player = new Player();
}

Game.prototype.tick = function() {
	with(this) { requestAnimationFrame(function() { tick(); }); }

	stats.begin();

	//Game.controls.center = Game.player.model.position;

	//Game.player.tick();
	Game.world.tick();
	Game.block.tick();
	Game.boat.tick();

	Game.controls.center = Game.boat.model.position.clone().setY(0);

	Game.controls.update();
	Game.renderer.clear();
	Game.renderer.render( Game.scene, Game.camera );

	stats.end();
}

Game.mousePositionOnObject = function(object) {
	var vector = new THREE.Vector3(
		(Game.mouse.x / window.innerWidth) * 2 - 1,
		-(Game.mouse.y / window.innerHeight) * 2 + 1,
		0.5);

	Game.projector.unprojectVector(vector, Game.camera);

	var ray = new THREE.Raycaster(
		Game.camera.position,
		vector.sub(Game.camera.position).normalize());

	var intersects = ray.intersectObject(object, true);

	if(intersects.length) {
		var closest = intersects[0];

		for(var i = 0; i < intersects.length; i += 1) {
			if(intersects[i].distance < closest.distance) {
				closest = intersects[i];
			}
		}

		return closest.point;
	}

	return false;
}

Game.getKey = function(key) {
	return Game.keys[key].active || false;
}

Game.useKey = function(key) {
	if(typeof Game.keys[key] !== 'undefined') {
		if(Game.keys[key].active && !Game.keys[key].used) {
			Game.keys[key] = {
				active: true,
				used: true
			};

			return true;
		}
	}

	return false;
}

Game.keydown = function(event) {
	console.log(event.keyCode);
	Game.keys[event.keyCode] = {
		active: true
	};
}

Game.keyup = function(event) {
	Game.keys[event.keyCode] = {
		active: false,
		used: false
	};
}

Game.mousemove = function(event) {
	Game.mouse = {
		x: event.pageX,
		y: event.pageY
	}
}

Game.getMouseKey = function(key) {
	return Game.mouse[key].active || false;
}

Game.useMouseKey = function(key) {
	if(typeof Game.mouse[key] !== 'undefined') {
		if(Game.mouse[key].active && !Game.mouse[key].used) {
			Game.mouse[key] = {
				active: true,
				used: true
			};

			return true;
		}
	}

	return false;
}

Game.mousedown = function(event) {

	Game.mouse[event.which] = {
		active: true
	};
}

Game.mouseup = function(event) {
	Game.mouse[event.which] = {
		active: false,
		used: false
	};
}
World = function() {
	Settings.world.verticesAmount = (Settings.world.vertices + 1) * (Settings.world.vertices + 1);

	this.sea = new Sea();
	this.sea.wave(32);
	this.land = new Land();

	//this.church = new Church();
	//this.church.getPosition().y += 96
}

World.prototype.tick = function() {
	this.sea.tick();
	this.land.tick();
	//this.church.tick();
}

World.vertToCoords = function(vert) {
	var x = vert % (Settings.world.vertices + 1);
	var y = Math.floor(vert / (Settings.world.vertices + 1));

	return {x: x, y: y};
}

World.coordsToVert = function(x, y) {
	return Math.round(y * (Settings.world.vertices + 1) + x);
}
Sea = function() {
	Entity.call(this);

	this.canvas = $('<canvas>')[0];
	this.canvas.width = Settings.world.width * Settings.texture.scale;
	this.canvas.height = Settings.world.height * Settings.texture.scale;
	$('#backstage').append(this.canvas);

	this.context = this.canvas.getContext('2d');

	this.texture = new THREE.Texture(
		this.canvas,
		new THREE.UVMapping(),
		THREE.RepeatWrapping,
		THREE.RepeatWrapping,
		THREE.NearestFilter,
		THREE.NearestMipMapLinearFilter
	);
	this.material = new THREE.MeshLambertMaterial({
		map: this.texture,
		side: THREE.DoubleSide,
		wireframe: false,
		transparent: true,
		opacity: 0.75
	});
	this.geometry = new THREE.PlaneGeometry(
		Settings.world.width,
		Settings.world.height,
		Settings.world.vertices,
		Settings.world.vertices
	);

	this.geometry.dynamic = true;

	this.zero = 0;

	this.model = new THREE.Mesh(this.geometry, this.material);
	this.model.rotation.x = -(Math.PI / 2);

	var verts = this.geometry.vertices;
	for(var i = 0; i < verts.length; i += 1) {
		verts[i].force = 0;
	}

	Game.scene.add(this.model);
}

Sea.prototype = Object.create(Entity.prototype);

Sea.prototype.tick = function() {
	this.applyForces();
	this.makeTexture();
}

Sea.prototype.applyForces = function() {
	var verts = this.geometry.vertices

	for(var i = 0; i < verts.length; i += 1) {
		var vert = verts[i];
		var v = Settings.world.vertices + 1;
		var force = 0;

		var coords = World.vertToCoords(i);

		/*if(coords.x == 0 || coords.y == 0 || coords.x == v - 1 || coords.y == v - 1) {
			vert.force = 0;
			vert.z = -48;
			continue;
		}*/

		if(i == 0) {
			vert.force = 0;
			vert.z = 0;
			//continue;
		}

		force += (i + 1 < verts.length) ? verts[i + 1].z : 0;
		force += (i - 1 > 0) ? verts[i - 1].z : 0;
		force += (i + v < verts.length) ? verts[i + v].z : 0;
		force += (i - v > 0) ? verts[i - v].z : 0;

		vert.force += (force / 5) - (vert.z + this.zero);
		vert.force *= Settings.water.dampening;

		var land = Game.world.land.geometry.vertices[i].z;

		if(land > -5 + this.model.position.y && land < 0 + this.model.position.y) {
			vert.force *= 1.02;
		}

		if(Game.world.land.geometry.vertices[i].z > 4 + this.model.position.y) {
			vert.force *= 0.8 + ((this.model.position.y) / 1000);
		}

		if(vert.force < 0.01 && vert.force > -0.01) {
			vert.force = 0;
		}
	}

	for(var i = 0; i < verts.length; i += 1) {
		var vert = verts[i];
		vert.z += (vert.force) * Settings.water.viscosity;

		if(typeof vert.highlight !== 'undefined') {
			vert.highlight -= 1;
		}

		/*if(Math.random() < 0.0001) {
			vert.force = Settings.world.vertices;
		}*/
	}

	if(Math.random() < 0.01) {
		this.wave(32);
	}

	/*if(Game.getKey(87)) {
		this.model.position.y += 0.5;
	}

	if(Game.getKey(83)) {
		this.model.position.y -= 0.5;
	}*/

	this.geometry.__dirtyVertices = true;
	this.geometry.verticesNeedUpdate = true;
	this.geometry.computeCentroids();
}

Sea.prototype.wave = function(size) {
	var verts = this.geometry.vertices
	for(var i = 0; i < Settings.world.vertices; i += 1) {
		verts[i].force = size;
	}
}

Sea.prototype.makeTexture = function() {
	var verts = this.geometry.vertices

	for(var i = 0; i < verts.length; i += 1) {
		var vert = verts[i];

		var coords = World.vertToCoords(i);
		var size = Settings.world.width / Settings.world.vertices * Settings.texture.scale;

		this.context.drawImage(
			Game.tileset,
			(vert.highlight > 0) ? 40 : 32,
			(vert.highlight > 0) ? this.getHeightColor(vert.z + this.zero + vert.highlight / 3) * 8 : this.getHeightColor(vert.z + this.zero) * 8,
			8,
			8,
			coords.x * size - size / 2,
			coords.y * size - size / 2,
			size,
			size

		)
	}

	this.texture.needsUpdate = true;
}

Sea.prototype.randomColor = function() {
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return '#000000';
}

Sea.prototype.getHeightColor = function(height) {
	height = Math.round(height / 2);

	height += 7;

	if(height > 15) { height = 15; }
	if(height < 0) { height = 0; }

	return height;
}
Land = function() {
	Entity.call(this);

	this.canvas = $('<canvas>')[0];
	this.canvas.width = Settings.world.width * Settings.texture.scale;
	this.canvas.height = Settings.world.height * Settings.texture.scale;
	$('#backstage').append(this.canvas);

	this.context = this.canvas.getContext('2d');

	this.texture = new THREE.Texture(
		this.canvas,
		new THREE.UVMapping(),
		THREE.RepeatWrapping,
		THREE.RepeatWrapping,
		THREE.NearestFilter,
		THREE.NearestMipMapLinearFilter
	);
	this.material = new THREE.MeshLambertMaterial({
		map: this.texture,
		side: THREE.DoubleSide,
		wireframe: false
	});
	this.geometry = new THREE.PlaneGeometry(
		Settings.world.width,
		Settings.world.height,
		Settings.world.vertices,
		Settings.world.vertices
	);

	this.geometry.dynamic = true;

	this.model = new THREE.Mesh(this.geometry, this.material);
	this.model.rotation.x = -(Math.PI / 2);

	var center = World.vertToCoords(Math.floor(Settings.world.verticesAmount / 2));
	this.load(Levels.first);
	//this.makeCircle(12, 1, center);

	this.makeTexture();

	Game.scene.add(this.model);
}

Land.prototype = Object.create(Entity.prototype);

Land.prototype.tick = function() {
	/*
	if(Game.useMouseKey(1)) {
		var position = Game.mousePositionOnObject(this.model);

		if(!position) {
			return;
		}

		position.x += Settings.world.width / 2;
		position.z += Settings.world.height / 2;

		position.x = Math.round(position.x / Settings.world.vertices);
		position.z = Math.round(position.z / Settings.world.vertices);

		this.makeCircle(4, 1.2, {x: position.x, y: position.z});
		this.makeTexture();
	}

	if(Game.useMouseKey(3)) {
		var position = Game.mousePositionOnObject(this.model);

		if(!position) {
			return;
		}

		position.x += Settings.world.width / 2;
		position.z += Settings.world.height / 2;

		position.x = Math.round(position.x / Settings.world.vertices);
		position.z = Math.round(position.z / Settings.world.vertices);

		this.makeCircle(-4, 1.2, {x: position.x, y: position.z});
		this.makeTexture();
	}

	if(Game.useKey(66)) {
		var map = [];
		for(var i = 0; i < this.geometry.vertices.length; i += 1) {
			map[i] = Math.round(this.geometry.vertices[i].z);

		}

		$("#output").html("[" + map.join(', ') + "]")
		console.log(map);
	}
	*/
}

Land.prototype.load = function(level) {
	var verts = this.geometry.vertices;
	for(var i = 0; i < verts.length; i += 1) {
		this.geometry.vertices[i].z = level[i];
	}
}

Land.prototype.sink = function() {
	var verts = this.geometry.vertices;
	for(var i = 0; i < verts.length; i += 1) {
		this.geometry.vertices[i].z = -64 + Math.random() * 8;
	}

	this.geometry.__dirtyVertices = true;
	this.geometry.verticesNeedUpdate = true;
	this.geometry.computeCentroids();
}

Land.prototype.makeCircle = function(size, slope, position) {
	var verts = this.geometry.vertices;
	for(var i = 0; i < verts.length; i += 1) {
		var coords = World.vertToCoords(i);

		var z = (
		 	size * size -
			((coords.x - position.x) * (coords.x - position.x)) / slope -
			((coords.y - position.y) * (coords.y - position.y)) / slope) + Math.random() * 6;

		if(z > 0) {
			if(size > 0) {
				this.geometry.vertices[i].z += z;
			} else {
				this.geometry.vertices[i].z -= z;
			}
		}

		if(this.geometry.vertices[i].z > 64) {
			this.geometry.vertices[i].z = 64;
		}
		if(this.geometry.vertices[i].z < -64) {
			this.geometry.vertices[i].z = -64;
		}
	}

	this.geometry.__dirtyVertices = true;
	this.geometry.verticesNeedUpdate = true;
	this.geometry.computeCentroids();
}

Land.prototype.makeTexture = function() {// http://paulirish.com/2011/requestanimationframe-for-smart-animating/// shim layer with setTimeout fallbackwindow['requestAnimFrame'] = (function(){  return  window.requestAnimationFrame       ||           window.webkitRequestAnimationFrame ||           window.mozRequestAnimationFrame    ||           window.oRequestAnimationFrame      ||           window.msRequestAnimationFrame     ||           function(/* function */ callback, /* DOMElement */ element){            window.setTimeout(callback, 1000 / 60);          };})();function Degrees2Radians(degrees) {	return degrees * (Math.PI / 180)};window.onload = function() {		/** CONFIG **/	var plots_x = 40;	var plots_y = 40;	var plot_vertices = 2;		var map_left = plots_x /  -2;	var map_top = plots_y / -2;			var renderer = new THREE.WebGLRenderer({antialias: true});	renderer.setSize(800, 640);	document.getElementById('viewport').appendChild(renderer.domElement);		var projector = new THREE.Projector();		var scene = new THREE.Scene();		var camera = new THREE.Camera(		35,		800 / 640,		.1,		10000	);	camera.position.set(40, 30, 40);		// Create the land	var ground = new THREE.Mesh(		new THREE.PlaneGeometry( plots_x, plots_y, plots_x * plot_vertices, plots_y * plot_vertices ),		new THREE.MeshShaderMaterial({			uniforms: {				texture_grass: { type: "t", value: 0, texture: THREE.ImageUtils.loadTexture( 'texture_ground_grass.jpg' ) },				texture_bare: { type: "t", value: 1, texture: THREE.ImageUtils.loadTexture( 'texture_ground_bare.jpg' ) },				texture_snow: { type: "t", value: 2, texture: THREE.ImageUtils.loadTexture( 'texture_ground_snow.jpg' ) },				show_ring: { type: 'i', value: true },				ring_width: { type: 'f', value: 0.15 },				ring_color: { type: 'v4', value: new THREE.Vector4(1.0, 0.0, 0.0, 1.0) },				ring_center: { type: 'v3', value: new THREE.Vector3() },				ring_radius: { type: 'f', value: 5.0 }			},			attributes: {				displacement: { type: 'f', value: [] }			},			vertexShader: document.getElementById( 'groundVertexShader' ).textContent,			fragmentShader: document.getElementById( 'groundFragmentShader' ).textContent		})	);	ground.dynamic = true;	ground.displacement = ground.materials[0].attributes.displacement;	for (var i = 0; i < ground.geometry.vertices.length; i++) {		ground.materials[0].attributes.displacement.value.push(0);	}	ground.rotation.x = Degrees2Radians(-90);	scene.addChild(ground);		// Water	ground.water = new THREE.Mesh(		new THREE.PlaneGeometry( plots_x, plots_y, plots_x * plot_vertices, plots_y * plot_vertices ),		new THREE.MeshShaderMaterial({			uniforms: {				water_level: { type: 'f', value: -2 },				time: { type: 'f', value: 0 }			},			attributes: {				displacement: { type: 'f', value: [] }			},			vertexShader: document.getElementById( 'waterVertexShader' ).textContent,			fragmentShader: document.getElementById( 'waterFragmentShader' ).textContent,			transparent: true		})	);	ground.water.dynamic = true;	ground.water.displacement = ground.water.materials[0].attributes.displacement;	for (var i = 0; i < ground.water.geometry.vertices.length; i++) {		ground.water.materials[0].attributes.displacement.value.push(0);	}	ground.water.position.z = -2;	ground.addChild(ground.water);			/** VERTEX POINTS **/	var verticeIndex = function(vertice) {		return vertice.x + vertice.y * ((plots_x * plot_vertices) + 1);	};		var findLattices = (function() {		function distance(x, y) {			return Math.pow(x, 2) + Math.pow(y, 2);		}				function generate_n2(radius) {			    var ymax = [0];		    var d = 0;		    		    var points = [];		    		    var batch, x, y;		    		    while (d <= radius) {		        yieldable = []		        		        while (true) {				    batch = [];				    for (x = 0; x < d+1; x++) {				        y = ymax[x];				        if (distance(x, y) <= Math.pow(d, 2)) {				            batch.push({x: x, y: y});				            ymax[x] += 1;			            }			        }				    if (batch.length === 0) {				        break;			        }			        points = points.concat(batch);			    }		        		        d += 1		        ymax.push(0);	        }	        	        return points;					};				return function findLattices(radius, origin) {			var all_points = [];						var i, point, points = generate_n2(radius);			for (i = 0; i < points.length; i++) {				point = points[i];								all_points.push(point);				if (point.x !== 0) {					all_points.push({x: -point.x, y: point.y});				}				if (point.y !== 0) {					all_points.push({x: point.x, y: -point.y});				}				if (point.x && point.y) {					all_points.push({x: -point.x, y: -point.y});				}			}						for (i = 0; i < all_points.length; i++) {				all_points[i].x += origin.x;				all_points[i].y += origin.y;			};						return all_points;		}			})()			/** LANDSCAPING **/	var landscape = new function() {		var landscape_tool = null;				this.select = function(tool) {			landscape_tool = tool;		};				this.onmousemove = function() {						if (mouse_info.state === 2) { // The user has clicked and drug their mouse								// Get all of the vertices in a 5-unit radius				var vertices = findLattices(5 * plot_vertices, mouse_info.vertex_coordinates);								// Call the landscaping tool to do its job				this.tools[landscape_tool](5 * plot_vertices, vertices);								// Ensure all of the vertices are within the elevation bounds				var vertice_index;				for (var i = 0; i < vertices.length; i++) {					vertice_index = verticeIndex(vertices[i]);					if (ground.displacement.value[vertice_index] > 8) {						ground.displacement.value[vertice_index] = 8;					}										if (ground.displacement.value[vertice_index] < -7) {						ground.displacement.value[vertice_index] = -7;					}										ground.water.displacement.value[vertice_index] = ground.displacement.value[vertice_index];				}				ground.water.displacement.needsUpdate = true;							}					};				this.tools = {			hill: function(radius, vertices) {								var i, vertice, vertice_index, distance;								for (i = 0; i < vertices.length; i++) {										vertice = vertices[i];										if (vertice.x < 0 || vertice.y < 0) {						continue;					}					if (vertice.x >= plots_x * plot_vertices + 1 || vertice.y >= plots_y * plot_vertices + 1) {						continue;					}										vertice_index = verticeIndex(vertice);					distance = Math.sqrt(Math.pow(mouse_info.vertex_coordinates.x - vertice.x, 2) + Math.pow(mouse_info.vertex_coordinates.y - vertice.y, 2));										ground.displacement.value[vertice_index] += Math.pow(radius - distance, .5) * .03;					ground.displacement.needsUpdate = true;				}							},						valley: function(radius, vertices) {								var i, vertice, vertice_index, distance;								for (i = 0; i < vertices.length; i++) {										vertice = vertices[i];										if (vertice.x < 0 || vertice.y < 0) {						continue;					}					if (vertice.x >= plots_x * plot_vertices + 1 || vertice.y >= plots_y * plot_vertices + 1) {						continue;					}										vertice_index = verticeIndex(vertice);					distance = Math.sqrt(Math.pow(mouse_info.vertex_coordinates.x - vertice.x, 2) + Math.pow(mouse_info.vertex_coordinates.y - vertice.y, 2));										ground.displacement.value[vertice_index] -= Math.pow(radius - distance, .5) * .03;					ground.displacement.needsUpdate = true;									}							}		};			}	window.landscape = landscape;	landscape.select('hill');			/** MOUSE **/	var mouse_info = {		x: 0,		y: 0,		button: 0,		state: 0, // 0 - up, 1 - down, 2 - dragging,		point: null,		plot_coordinates: {x: null, y: null},		vertex_coordinates: {x: null, y: null}	};		var updateMouse = function updateMouse(e) {		e.preventDefault();		e.cancelBubble = true;				mouse_info.x = e.layerX;		mouse_info.y = e.layerY;		mouse_info.button = e.button;	};		var updateMouseCoordinates = function() {		var vector = new THREE.Vector3((mouse_info.x / 800) * 2 - 1, - (mouse_info.y / 640) * 2 + 1, 0.5);		projector.unprojectVector(vector, camera);				var ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );				var intersection = ray.intersectObject(ground);		if (intersection.length === 0) {			mouse_info.plot_coordinates.x = null;			mouse_info.plot_coordinates.y = null;						mouse_info.vertex_coordinates.x = null;			mouse_info.vertex_coordinates.y = null;						return null;		} else {			mouse_info.point = intersection[0].point;						mouse_info.plot_coordinates.x = Math.floor(mouse_info.point.x - map_left);			mouse_info.plot_coordinates.y = Math.floor(mouse_info.point.z - map_top);						mouse_info.vertex_coordinates.x = Math.floor((mouse_info.point.x * plot_vertices) - (map_left * plot_vertices));			mouse_info.vertex_coordinates.y = Math.floor((mouse_info.point.z * plot_vertices) - (map_top * plot_vertices));		}				ground.materials[0].uniforms.ring_center.value.x = mouse_info.point.x;		ground.materials[0].uniforms.ring_center.value.y = -mouse_info.point.z;	};		renderer.domElement.onmousedown = function onmousedown(e) {		mouse_info.state = 1;		updateMouse(e);	};	renderer.domElement.onmouseup = function onmouseup(e) {		mouse_info.state = 0;		updateMouse(e);	};	renderer.domElement.onmousemove = function onmousemove(e) {		if (mouse_info.state == 1) {			mouse_info.state = 2;		}		updateMouse(e);		updateMouseCoordinates();		landscape.onmousemove();	};	renderer.domElement.onmouseout = function onmouseout(e) {		mouse_info.state = 0;		updateMouse(e);	};			var render = function render() {		renderer.render(scene, camera);	};		var main = function main() {				ground.water.materials[0].uniforms.time.value = new Date().getTime() % 10000;				render();		window.requestAnimFrame(main);			};		requestAnimFrame(main);}
	var verts = this.geometry.vertices

	for(var i = 0; i < verts.length; i += 1) {
		var vert = verts[i];

		var coords = World.vertToCoords(i);
		var size = Settings.world.width / Settings.world.vertices * Settings.texture.scale;

		this.context.drawImage(
			Game.tileset,
			(vert.highlight > 0) ? 0 : 24,
			(14 - this.getHeightColor(vert.z / 4)) * 8,
			8,
			8,
			coords.x * size - size / 2,
			coords.y * size - size / 2,
			size,
			size
		);
	}

	this.texture.needsUpdate = true;
}

Land.prototype.getHeightColor = function(height) {
	height = Math.round(height / 2);

	height += 7;

	if(height > 14) { height = 14; }
	if(height < 0) { height = 0; }

	return height;
}
Boat = function() {
	Entity.call(this);

	this.geometry = new THREE.CubeGeometry(16, 16, 48, 2, 2, 4);
	this.textureSide = THREE.ImageUtils.loadTexture('./game/textures/boat.png');
	this.textureSide.wrapS = THREE.RepeatWrapping;
	this.textureSide.wrapT = THREE.RepeatWrapping;
	this.textureSide.repeat.set(2, 1);
	this.textureSide.magFilter = THREE.NearestFilter;
	this.textureSide.minFilter = THREE.NearestMipMapLinearFilter;
	this.materialSide = new THREE.MeshLambertMaterial({ wireframe: false, map: this.textureSide });

	this.textureTop = THREE.ImageUtils.loadTexture('./game/textures/boattop.png');
	this.textureTop.magFilter = THREE.NearestFilter;
	this.textureTop.minFilter = THREE.LinearMipMapLinearFilter;
	this.materialTop = new THREE.MeshLambertMaterial({ wireframe: false, map: this.textureTop });

	var materials = [
		this.materialSide,
		this.materialSide,
		this.materialTop,
		this.materialSide,
		this.materialSide,
		this.materialSide,
	];

	this.geometry.vertices[0].z += 8;
	this.geometry.vertices[0].x -= 4;
	this.geometry.vertices[5].z += 4;
	this.geometry.vertices[5].x -= 4;
	this.geometry.vertices[10].x -= 8;
	this.geometry.vertices[11].x -= 4;
	this.geometry.vertices[12].x -= 4;
	this.geometry.vertices[13].x -= 4;
	this.geometry.vertices[14].x -= 4;
	this.geometry.vertices[19].z += 8;
	this.geometry.vertices[19].x += 4;
	this.geometry.vertices[24].z += 4;
	this.geometry.vertices[24].x += 4;
	this.geometry.vertices[25].x += 4;
	this.geometry.vertices[26].x += 4;
	this.geometry.vertices[27].x += 4;
	this.geometry.vertices[28].x += 4;
	this.geometry.vertices[29].x += 8;
	this.geometry.vertices[34].z += 12;
	this.geometry.vertices[40].z += 8;

	this.geometry.vertices[31].y -= 4;
	this.geometry.vertices[32].y -= 4;
	this.geometry.vertices[33].y -= 4;;

	this.boat = new THREE.Mesh(this.geometry, new THREE.MeshFaceMaterial(materials));
	this.force = {
		rotation: new THREE.Vector3(),
		position: new THREE.Vector3()
	};

	this.mastGeometry = new THREE.CubeGeometry(2, 48, 2);
	this.textureMast = THREE.ImageUtils.loadTexture('./game/textures/mast.png');
	this.textureMast.wrapS = THREE.RepeatWrapping;
	this.textureMast.wrapT = THREE.RepeatWrapping;
	this.textureMast.repeat.set(1, 2);
	this.textureMast.magFilter = THREE.NearestFilter;
	this.textureMast.minFilter = THREE.LinearMipMapLinearFilter;
	this.materialMast = new THREE.MeshLambertMaterial({ wireframe: false, map: this.textureMast });
	this.mast = new THREE.Mesh(this.mastGeometry, this.materialMast);
	this.mast.position.y = 16

	this.mastTop = new THREE.Mesh(new THREE.CubeGeometry(48, 1, 1), this.materialMast);
	this.mastTop.position.y = 39;

	this.mastBottom = new THREE.Mesh(new THREE.CubeGeometry(48, 1, 1), this.materialMast);
	this.mastBottom.position.y = 15;

	this.sailGeometry = new THREE.PlaneGeometry(48, 24, 8, 4);
	this.textureSail = THREE.ImageUtils.loadTexture('./game/textures/sail.png');
	this.textureSail.magFilter = THREE.NearestFilter;
	this.textureSail.minFilter = THREE.LinearMipMapLinearFilter;
	this.materialSail = new THREE.MeshLambertMaterial({ wireframe: false, map: this.textureSail, side: THREE.DoubleSide });
	this.sail = new THREE.Mesh(this.sailGeometry, this.materialSail);
	this.sail.position.y = 27;

	for(var i = 0; i < this.sail.geometry.vertices.length; i += 1) {
		var vert = this.sail.geometry.vertices[i];

		var x = i % (8 + 1);
		var y = Math.floor(i / (8 + 1));

		vert.z = 1 * 1 -
			((x - 4) * (x - 4)) / 2 -
			((y - 2) * (y - 2)) / 2;

		vert.z += 9;
	}

	this.model = new THREE.Object3D();
	this.model.add(this.mast);
	this.model.add(this.mastTop);
	this.model.add(this.mastBottom);
	this.model.add(this.sail);
	this.model.add(this.boat);

	Game.scene.add(this.model);
	this.model.position.y = 120;
}

Boat.prototype = Object.create(Entity.prototype);

Boat.prototype.tick = function() {
	var x = Math.round((this.model.position.z + Settings.world.width / 2) / Settings.world.vertices);
	var y = Math.round((this.model.position.x + Settings.world.width / 2) / Settings.world.vertices);

	var vertice = World.coordsToVert(y, x);

	var sea = Game.world.sea.geometry.vertices;
	var land = Game.world.land.geometry.vertices;

	var surround = {
		north: sea[vertice - Settings.world.vertices - 1],
		south: sea[vertice + Settings.world.vertices + 1],
		east: sea[vertice + 1],
		west: sea[vertice - 1]
	}

	var surroundLand = {
		north: land[vertice - Settings.world.vertices - 1],
		south: land[vertice + Settings.world.vertices + 1],
		east: land[vertice + 1],
		west: land[vertice - 1]
	}

	var surroundZero = {
		north: sea[0],
		south: sea[0],
		east: sea[0],
		west: sea[0]
	}

	for(key in surround) {
		/*if(typeof surround[key] === 'undefined' || this.model.position.x >= 512 || this.model.position.x <= -512) {
			surround = surroundZero;
			break;
		}*/

		if(surround[key].z < surroundLand[key].z) {
			surround[key] = surroundLand[key].clone();
			surround[key].z -= 8;
			this.force.position.z *= 0.95;
		}
	}

	//console.log(sea[vertice]);

	if(typeof sea[vertice] !== 'undefined') {
		sea[vertice].highlight = 40;
	}
	/*surround.north.highlight = 20;
	surround.south.highlight = 20;
	surround.east.highlight = 20;
	surround.west.highlight = 20;*/

	var average = (surround.north.z * 2 + surround.south.z * 2 + surround.east.z + surround.west.z) / 4

	this.force.position.y = average;

	var angle = {
		latitude: 0,
		longitude: 0
	};

	angle.latitude = surround.north.clone().sub(surround.south).normalize();
	angle.longitude = surround.east.clone().sub(surround.west).normalize();

	/*
	this.force.rotation.x = Math.atan2(angle.latitude.z, angle.latitude.y) * Settings.boat.dampening;
	this.force.rotation.z = Math.atan2(angle.longitude.y, angle.longitude.z) * Settings.boat.dampening;
	*/

	//console.log(angle.longitude, surround.east, surround.west);

	this.model.rotation.x = Math.atan2(angle.latitude.z, angle.latitude.y);
	this.model.rotation.z = Math.atan2(angle.longitude.z, angle.longitude.x);

	//this.model.rotation.y += 0.01;


	if(Game.getKey(87)) {
		this.force.position.z += 0.03;
	}

	// key S (backward)
	if(Game.getKey(83)) {
		this.force.position.z -= 0.02;
	}

	// key A (left)
	if(Game.getKey(65)) {
		this.force.rotation.y += 0.05 * (this.force.position.z * Settings.boat.dampening / 4);
	}

	// key D (right)
	if(Game.getKey(68)) {
		this.force.rotation.y -= 0.05 * (this.force.position.z * Settings.boat.dampening / 4);
	}

	this.force.position.multiplyScalar(Settings.boat.inertia);
	//this.force.rotation.multiplyScalar(Settings.boat.inertia);


	this.model.rotation.x += (this.force.rotation.x - this.model.rotation.x) * 0.3;
	this.model.rotation.y += (this.force.rotation.y - this.model.rotation.y) * 0.3;
	this.model.rotation.z += (this.force.rotation.z - this.model.rotation.z) * 0.3;


	this.force.position.y = (this.force.position.y - this.model.position.y) * 0.2;

	this.model.position.y += ((this.force.position.y) * Settings.boat.inertia);
	this.model.translateZ((this.force.position.z) * Settings.boat.inertia);
}
Block = function() {
	Entity.call(this);

	this.geometry = new THREE.CubeGeometry(0, 0, 0);
	this.material = new THREE.MeshNormalMaterial({ wireframe: false, color: 0xff0000 });

	this.model = new THREE.Mesh(this.geometry, this.material);

	this.lineGeometry = new THREE.Geometry();
	this.line = new THREE.Line(this.lineGeometry, new THREE.LineBasicMaterial({ color: 0x0000ff }));

	Game.scene.add(this.line);
	Game.scene.add(this.model);

	this.i = 0;
}

Block.prototype = Object.create(Entity.prototype);

Block.prototype.tick = function() {
	var position = Game.mousePositionOnObject(Game.world.land.model);

	if(position) {
		/*position.x += Settings.world.width / 2;
		position.z += Settings.world.height / 2;*/

		position.x = Math.round(position.x / Settings.world.vertices) * Settings.world.vertices;
		position.z = Math.round(position.z / Settings.world.vertices) * Settings.world.vertices;

		this.model.position = position;
	}
}
var Levels = {
	first: [-63, -57, -59, -59, -61, -56, -56, -61, -63, -63, -59, -60, -61, -60, -57, -60, -48, -54, -52, -64, -64, -64, -64, -64, -64, -63, -64, -59, -56, -61, -56, -61, -59, -59, -60, -56, -57, -57, -58, -60, -60, -59, -63, -61, -63, -63, -60, -48, -43, -37, -32, -45, -57, -64, -64, -64, -64, -64, -63, -52, -52, -52, -54, -63, -63, -62, -58, -57, -62, -59, -57, -56, -58, -56, -59, -62, -51, -49, -40, -54, -43, -35, -40, -27, -10, -32, -38, -62, -64, -64, -60, -59, -52, -47, -49, -54, -57, -56, -59, -63, -62, -64, -62, -63, -56, -56, -63, -58, -47, -36, -26, -25, -17, -12, -8, 1, -12, -10, -12, -12, -53, -64, -64, -60, -46, -46, -33, -37, -49, -42, -60, -57, -59, -59, -60, -61, -54, -50, -55, -53, -56, -36, -27, -12, 0, 19, 7, 15, 13, 21, 19, 3, -11, -25, -51, -59, -56, -42, -35, -31, -32, -31, -46, -49, -44, -58, -63, -54, -55, -51, -47, -47, -55, -38, -23, -14, 5, -1, 19, 21, 21, 31, 26, 21, 11, -7, -22, -35, -46, -51, -34, -31, -22, -20, -30, -34, -50, -50, -58, -58, -50, -54, -46, -37, -43, -37, -28, -15, 1, 22, 27, 13, 22, 27, 27, 35, 24, 6, 5, -15, -28, -41, -41, -28, -22, -19, -15, -27, -39, -48, -41, -62, -56, -46, -47, -45, -36, -42, -39, -23, -4, 2, 13, 24, 23, 20, 27, 14, 8, 6, 7, -18, -20, -35, -43, -39, -39, -18, -19, -29, -34, -40, -41, -47, -57, -51, -51, -45, -38, -33, -31, -35, -12, -15, -2, 8, 25, 1, -6, -6, -6, -1, -7, -11, -24, -31, -34, -43, -40, -19, -21, -27, -33, -35, -43, -44, -45, -61, -54, -44, -35, -38, -31, -26, -20, -23, -13, -12, 2, 4, 7, -5, -18, -23, -29, -29, -29, -40, -44, -44, -40, -36, -35, -27, -23, -31, -35, -37, -45, -54, -59, -54, -44, -34, -34, -21, -22, -26, -27, -26, -27, -25, -18, -13, -22, -35, -45, -30, -49, -44, -50, -44, -36, -37, -25, -27, -33, -27, -37, -45, -36, -41, -49, -64, -56, -46, -34, -26, -21, -14, -14, -19, -36, -41, -36, -39, -38, -35, -40, -45, -45, -48, -51, -55, -44, -44, -31, -28, -27, -35, -27, -46, -40, -45, -49, -53, -52, -47, -43, -30, -28, -21, -26, -22, -28, -37, -43, -44, -38, -40, -40, -45, -33, -41, -51, -56, -46, -47, -41, -28, -24, -27, -29, -26, -37, -30, -43, -32, -42, -49, -40, -37, -27, -32, -23, -31, -18, -27, -35, -48, -40, -41, -33, -41, -39, -42, -39, -39, -49, -44, -39, -39, -31, -17, -27, -29, -29, -26, -15, -20, -20, -27, -43, -42, -26, -28, -19, -27, -25, -27, -32, -40, -28, -35, -28, -31, -36, -27, -37, -39, -42, -44, -40, -39, -34, -30, -33, -24, -27, -19, -15, -8, -3, -11, -20, -39, -39, -38, -25, -18, -22, -30, -18, -18, -30, -40, -42, -35, -19, -27, -21, -31, -33, -37, -35, -33, -31, -23, -29, -31, -23, -23, -14, -13, 12, -4, -7, -15, -38, -41, -40, -30, -35, -15, -13, -13, -3, -19, -19, -34, -24, -19, -29, -28, -25, -42, -45, -38, -35, -23, -34, -37, -25, -25, -24, -10, 1, 18, 24, 19, -3, -46, -45, -45, -33, -15, -7, 12, 6, 11, 1, -20, -22, -28, -20, -33, -37, -25, -38, -37, -36, -47, -28, -20, -18, -18, -22, -11, -3, 14, 35, 16, 30, 18, -41, -42, -43, -26, -9, 4, 15, 21, 23, 14, -2, -21, -36, -34, -40, -31, -28, -34, -40, -23, -38, -39, -23, -10, -29, -19, -6, 1, 17, 30, 32, 44, 20, -49, -46, -40, -23, 2, 17, 31, 43, 46, 30, -3, -21, -41, -40, -32, -40, -33, -20, -29, -43, -33, -37, -31, -24, -17, -28, -10, -2, 23, 40, 38, 27, 28, -54, -55, -50, -31, 7, 27, 42, 57, 60, 52, 24, -25, -31, -37, -41, -29, -38, -33, -20, -20, -43, -39, -25, -30, -35, -32, -36, 7, 38, 43, 48, 46, 27, -55, -51, -39, -25, 8, 35, 49, 56, 64, 51, 27, 4, -23, -37, -44, -40, -44, -32, -29, -22, -23, -39, -34, -32, -34, -33, -25, 9, 33, 47, 47, 51, 34, -48, -46, -41, -26, -4, 20, 58, 64, 64, 64, 39, 6, 0, -26, -40, -30, -34, -41, -34, -25, -35, -44, -21, -24, -22, -17, -25, -6, 21, 50, 60, 59, 41, -45, -41, -48, -20, -15, 11, 27, 58, 64, 64, 50, 20, 3, -6, -27, -43, -37, -44, -33, -27, -27, -30, -23, -17, -16, -23, -19, 1, 16, 42, 47, 53, 46, -43, -44, -37, -31, -20, -9, 12, 41, 64, 53, 42, 31, 23, 10, -13, -33, -33, -36, -37, -31, -19, -19, -15, -17, -22, -6, -19, -3, 11, 34, 46, 53, 27, -41, -36, -31, -29, -36, -41, -12, 16, 43, 49, 51, 40, 42, 27, 5, -33, -30, -35, -44, -32, -24, -21, -15, -14, -25, -12, 2, -5, 32, 52, 38, 54, 27, -32, -14, -29, -31, -35, -30, -20, 8, 23, 48, 44, 49, 49, 34, 10, -12, -30, -40, -39, -44, -23, -30, -31, -23, -15, -7, -6, 0, 41, 30, 43, 50, 24, 3, 8, -3, -2, -27, -16, -2, 18, 34, 36, 44, 49, 41, 42, 14, -1, -7, -20, -6, -12, -22, -23, -19, -8, -6, 4, 10, 30, 33, 49, 47, 56, 46, 13, 33, 29, 25, 12, 8, 14, 23, 43, 46, 43, 45, 37, 37, 25, 24, 15, 7, 3, 6, 4, 4, 17, 26, 29, 35, 24, 33, 56, 57, 64, 64, 39, 25, 31, 42, 38, 43, 43, 28, 36, 54, 39, 47, 41, 37, 34, 34, 33, 30, 20, 24, 17, 16, 21, 27, 40, 51, 47, 48, 47, 64, 64, 64, 64, 55, 31, 29, 50, 55, 57, 40, 40, 41, 53, 54, 50, 43, 40, 35, 38, 28, 40, 41, 33, 39, 37, 24, 41, 53, 42, 44, 20, 38, 58, 64, 64, 63, 57, 26, 29, 38, 49, 51, 48, 32, 32, 41, 40, 35, 27, 32, 42, 26, 35, 37, 27, 34, 30, 40, 35, 36, 51, 42, 44, 45, 52, 64, 64, 53, 48, 45, 18, 25, 19, 31, 29, 26, 13, 25, 26, 22, 17, 5, 3, 8, 15, 5, 3, 17, 15, 27, 33, 15, 30, 26, 35, 26, 33, 42, 43, 33, 55, 36, 29]
}