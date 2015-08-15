var game = {
	entities: [],
	cameras: [],
	fps: 30,
	frames: 0,
	counter: 0,
	lastTick: 0,
	lastPaint: 0,
	lastFps: 0,
	delta: 0,
	keys: [],
	usedKeys: [82,27,32,87,83,65,68],
	generate: { density: 5, parallexDensity: 10 },
	compileTimer: 0,
	densityTimer: 0,
	score: 0,
	alive: true,
	started: false,
	paused: false,
	developer: false,
	tickInterval: null,
	ballcounter: 0,
	
	init: function() 
	{
		if(canvas === undefined)
		{
			console.log('abort: canvas library not found');
			return false;
		}
		if(!canvas.initialized)
		{
			console.log(canvas);
			console.log('abort: canvas library was not initialized');
			return false;
		}
		
		this.lastTick = this.microtime();
		this.lastFps = this.microtime();
		
		$(document).keydown(game.keydown);
		$(document).keyup(game.keyup);
		$(canvas.identifier).click(game.click);
	},
	
	start: function()
	{
	
		this.entities.length = 0;
		this.cameras.length = 0;
		this.ballCounter = 0;
		this.compileTimer = 0;
		this.densityTimer = 0;
		this.score = 0;
		this.alive = true;
		
		var cam = $.extend(true, {}, camera);
		cam.screenX = 0;
		cam.screenY = 0;
		cam.width = 960;
		cam.height = 640;
		
		var character = $.extend(true, {}, CharacterEntity);
		cam.follow = character;			
		
		this.cameras.push(cam);
		this.entities.push(character);
		
		this.characters.compile();	
		
		for(var i = 0; i < 300; i += 1)
		{
			var point = $.extend(true, {}, ParallexEntity);
			
			point.x = getRandomArbitary(-1000, 1000);
			point.y = getRandomArbitary(- 1000, 1000);
			point.width = getRandomInt(1, 5);
			point.height = point.width;
			point.speed += getRandomInt(0, 50);
			
			var number = getRandomInt(200, 255);
			var opacity = getRandomInt(60, 90) / 100;
			
			point.color = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
			
			this.entities.push(point);
		}
		
		this.tickInterval = setInterval(function() { game.tick(); }, 5);
		
		this.paused = false;
	},
	
	tick: function()
	{
		if(this.isPressed(82))
		{
			clearInterval(this.tickInterval);
			
			this.unPress(82);		
			this.started = true;
			this.paused = true;
			this.start();
			this.cameras[0].follow.alive = true;
			return;
		}
		if(this.isPressed(27) && this.alive)
		{
			this.unPress(27);
			this.paused ? this.paused = false : this.paused = true;
		}
	
		this.delta = this.microtime() - this.lastTick;
		this.lastTick = this.microtime();
	
		this.counter += this.delta;
		
		this.densityTimer += this.delta;
		if(this.densityTimer > 20 && this.generate.density < 25)
		{
			this.generate.density += 3;
			this.densityTimer = 0;
		}
		if(this.densityTimer > 5 && this.generate.density < 35)
		{
			this.generate.density += 1;
			this.densityTimer = 0;
		}
		
		this.compileTimer += this.delta;
		if(this.compileTimer > 0.5)
		{
			this.characters.compile();			
			this.compileTimer = 0;
		}
		
		if(this.started && !this.paused)
		{
			for(var i = 0; i < this.entities.length; i += 1)
			{
				var entity = this.entities[i];
				if(entity.tick !== undefined)
				{
					entity.tick(this.delta);
				}
			}
		
			var alive = false;
			for(var i = 0; i < this.cameras.length; i += 1)
			{
				if(this.alive)
				{
					this.score += 100 * this.delta;
				}
			
				var camera = this.cameras[i];
				if(camera.tick !== undefined)
				{
					camera.tick(this.delta);
				}
				if(camera.follow.alive)
				{
					alive = true;
				}
			}
			this.alive = alive;
		
			if(getRandomArbitary(0, 100) < this.generate.density)
			{
				var ball = $.extend(true, {}, BallEntity);
				
				ball.x = getRandomArbitary(0, 1000) + canvas.width + this.characters.x.last();
				ball.y = getRandomArbitary(this.characters.y.first() - 1500, this.characters.y.last() + 1500);
				ball.width = getRandomArbitary(30, 70);
				ball.height = ball.width;
				
				this.ballCounter += 1;
				//console.log("counter: " + this.ballCounter);
				this.entities.push(ball);
			}
			
			if(getRandomArbitary(0, 100) < this.generate.parallexDensity)
			{
				var point = $.extend(true, {}, ParallexEntity);
				
				point.x = getRandomArbitary(0, 1000) + canvas.width + this.characters.x.last();
				point.y = getRandomArbitary(this.characters.y.first() - 1500, this.characters.y.last() + 1500);
				point.width = getRandomInt(1, 5);
				point.height = point.width;
				point.speed += getRandomInt(-50, 50);
				
				var number = getRandomInt(200, 255);
				var opacity = getRandomInt(60, 90) / 100;
				
				point.color = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
				
				this.entities.push(point);
			}
		
			if(this.isPressed(32) && this.alive)
			{
				this.unPress(32);
				if(this.cameras.length < 4)
				{
					loop = this.cameras.length;
					for(var i = 0; i < loop; i += 1)
					{
						var cam = $.extend(true, {}, camera)
						
						var character = $.extend(true, {}, CharacterEntity, this.cameras[i].follow);
						
						character.speed += getRandomArbitary(-30, 30); if(character.speed < 80) { character.speed = 80; }
						character.width += getRandomArbitary(-10, 10); if(character.width < 15) { character.width = 15; }
						character.height += getRandomArbitary(-10, 10); if(character.height < 15) { character.height = 15; }
						
						cam.follow = character;
						
						this.entities.push(character);
						this.cameras.push(cam);
					}
					
					this.characters.compile();
					this.resizeCameras();
				}
			}
		}
		
		this.lastPaint += this.delta;
		if(this.lastPaint > (1 / this.fps))
		{
			this.lastPaint = 0;
			this.frames += 1;
			
			this.paint();
		}
		
		var dead = [];
		for(var i = 0; i < this.cameras.length; i++)
		{
			if(!this.cameras[i].alive || !this.alive)
			{
				dead.push(this.cameras[i]);
			}
		}
		
		if(dead.length >= this.cameras.length / 2 && this.cameras.length > 1)
		{
			for(var i = 0; i < dead.length; i++)
			{
				console.log(dead[i]);
				if(this.cameras.length > 1)
				{
					this.cameras.splice(this.cameras.indexOf(dead[i]), 1);
				}
			}
			dead = [];
			
			console.log(this.cameras);				
			this.resizeCameras();
		}
	},
	
	resizeCameras: function()
	{
		var loop = this.cameras.length;
		var size = { width: canvas.width, height: canvas.height };
		
		while(loop > 1)
		{
			if(size.width > size.height) { size.width /= 2; }
			else if(size.height > size.width) { size.height /= 2; }
			loop /= 2;
		}
		
		for(var i = 0; i < this.cameras.length; i += 1)
		{
			var cam = this.cameras[i];
			cam.width = size.width;
			cam.height = size.height;
			
			cam.screenX = size.width * (i % (canvas.width / size.width));
			cam.screenY = size.height * ((i - (i % (canvas.width / size.width))) / (canvas.width / size.width));
		}
	},
	
	paint: function()
	{
		canvas.clear();
		canvas.ctx.fillStyle = "#282E30";
		canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
		canvas.ctx.fillStyle = "white";
		canvas.ctx.textAlign = "left";
		
		if(this.developer)
		{
			canvas.ctx.font = "12px verdana";
			canvas.ctx.fillText("tick: " + this.counter, 5, 15);
			var seconds = (this.microtime() - this.lastFps);
			canvas.ctx.fillText("fps: " + (this.frames / seconds), 5, 30);
		}
		
		for(var i = 0; i < this.cameras.length; i += 1)
		{
			var camera = this.cameras[i];
			canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
			
			canvas.ctx.save();
			canvas.ctx.rect(camera.screenX + 1, camera.screenY + 1, camera.width - 2, camera.height - 2);
			canvas.ctx.strokeStyle = "rgba(0,0,0,0)";
			canvas.drawRect(camera.screenX + 1, camera.screenY + 1, camera.width - 2, camera.height - 2);
			canvas.ctx.clip();
			
			canvas.ctx.translate(camera.screenX, camera.screenY);
			canvas.ctx.translate(-camera.x, -camera.y);
			
			var remove = [];
			for(var j = 0; j < this.entities.length; j += 1)
			{
				var entity = this.entities[j];
				if(entity.x + entity.width - camera.x < 0)
				{
					remove.push[entity];
					continue;
				}
				
				if(entity.x - camera.x > camera.width || entity.y - camera.y > camera.height ||
					entity.x + entity.width - camera.x < 0 ||entity.y + entity.height - camera.y < 0)
				{
					continue;
				}
				
				if(entity.character !== undefined)
				{
					continue;
				}
				
				if(entity.paint !== undefined)
				{
					canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
					canvas.ctx.translate(camera.screenX, camera.screenY);
					canvas.ctx.translate(-camera.x, -camera.y);
					entity.paint();
				}
			}
			
			for(var j = 0; j < remove.length; j += 1)
			{
				this.entities.splice(this.entities.indexOf(remove[j]), 1);
			}
			
			if(!camera.follow.alive)
			{
				canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);			
				canvas.ctx.translate(camera.screenX, camera.screenY);
				canvas.ctx.translate(-camera.x, -camera.y);
				canvas.noise(camera.x, camera.y, camera.width, camera.height);
			}
			else
			{
				canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
				canvas.ctx.translate(camera.screenX, camera.screenY);
				canvas.ctx.translate(-camera.x, -camera.y);
				camera.follow.paint();
			}
			
			canvas.ctx.restore();
			canvas.ctx.strokeStyle = "#FFFFFF";
			canvas.drawRect(camera.screenX, camera.screenY, camera.width, camera.height);
		}
		
		if(!this.started || this.paused)
		{			
			canvas.ctx.fillStyle = "#505C60";
			canvas.fillRect(canvas.width / 2 - 200, 1, 400, canvas.height - 2);
			
			canvas.ctx.strokeStyle = '#68777C';
			canvas.ctx.lineWidth = 10;
			canvas.ctx.beginPath();
			canvas.ctx.moveTo(canvas.width / 2 - 200, 1);
			canvas.ctx.lineTo(canvas.width / 2 - 200, canvas.height - 1);
			canvas.ctx.moveTo(canvas.width / 2 + 200, 1);
			canvas.ctx.lineTo(canvas.width / 2 + 200, canvas.height - 1);
			canvas.ctx.stroke();
			
			canvas.ctx.font = "120px Calibri";
			canvas.ctx.textAlign = "center";
			canvas.ctx.fillStyle = "#FFFFFF";
			canvas.ctx.strokeStyle = '#FFFFFF';
			canvas.ctx.lineWidth = 2;
			canvas.ctx.fillText("RIVE", canvas.width / 2, canvas.height / 4);
			
			canvas.ctx.font = "30px Calibri";
			if(!this.started) {	canvas.ctx.fillText("Click to start", canvas.width / 2, 200); }
			else { canvas.ctx.fillText("Score: " + addCommas(Math.floor(this.score)), canvas.width / 2, 200); }
			
			canvas.ctx.font = "20px Calibri";
			canvas.ctx.fillText("move", canvas.width / 2, 250);
			canvas.ctx.fillText("split", canvas.width / 2, 390);
			
			canvas.ctx.textAlign = "left";
			canvas.ctx.fillText("restart", canvas.width / 2 - 30, 505);
			canvas.ctx.fillText("pause", canvas.width / 2 - 30, 555);
			
			canvas.drawKey(canvas.width / 2 - 20, 260, "W");
			canvas.drawKey(canvas.width / 2 - 65, 305, "A");
			canvas.drawKey(canvas.width / 2 - 20, 305, "S");
			canvas.drawKey(canvas.width / 2 + 25, 305, "D");

			canvas.drawKey(canvas.width / 2 + -100, 400, "space", 200);		

			canvas.drawKey(canvas.width / 2 - 80, 480, "R");	
			canvas.drawKey(canvas.width / 2 - 80, 530, "Esc");			
		}
		else if(this.alive)
		{
			canvas.ctx.font = "40px Calibri";
			canvas.ctx.textAlign = "right";
			canvas.ctx.fillStyle = "#FFFFF";
			canvas.ctx.fillText("Score: " + addCommas(Math.floor(this.score)), canvas.width - 40, 60);
		}
		else
		{
			canvas.ctx.fillStyle = "#505C60";
			canvas.fillRect(canvas.width / 2 - 200, 1, 400, canvas.height - 2);
			
			canvas.ctx.strokeStyle = '#68777C';
			canvas.ctx.lineWidth = 10;
			canvas.ctx.beginPath();
			canvas.ctx.moveTo(canvas.width / 2 - 200, 1);
			canvas.ctx.lineTo(canvas.width / 2 - 200, canvas.height - 1);
			canvas.ctx.moveTo(canvas.width / 2 + 200, 1);
			canvas.ctx.lineTo(canvas.width / 2 + 200, canvas.height - 1);
			canvas.ctx.stroke();
			
			canvas.ctx.font = "120px Calibri";
			canvas.ctx.textAlign = "center";
			canvas.ctx.fillStyle = "#FFFFFF";
			canvas.ctx.strokeStyle = '#FFFFFF';
			canvas.ctx.lineWidth = 2;
			canvas.ctx.fillText("RIVE", canvas.width / 2, canvas.height / 4);
			//canvas.ctx.strokeText("seperate ways", canvas.width / 2, canvas.height / 4);
		
			canvas.ctx.font = "40px Calibri";
			canvas.ctx.textAlign = "center";
			canvas.ctx.fillStyle = "#FFFFFF";
			canvas.ctx.fillText("Game over!", canvas.width / 2, canvas.height / 2);
			canvas.ctx.fillText("Final score: " + addCommas(Math.floor(this.score)), canvas.width / 2, canvas.height / 2 + 50);
			
			canvas.ctx.font = "12px verdana";
			canvas.ctx.fillText("Andre Nanninga - FakeYou", canvas.width / 2, canvas.height - 40);
			
			canvas.ctx.font = "20px Calibri";
			canvas.ctx.textAlign = "left";
			canvas.ctx.fillText("restart", canvas.width / 2 - 30, 505);
			canvas.drawKey(canvas.width / 2 - 80, 480, "R");	
		}
	},
	
	characters: {
		speed: [],
		x: [],
		y: [],
	
		compile: function()
		{
			this.speed = [];
			this.x = [];
			this.y = [];
		
			for(var i = 0; i < game.cameras.length; i += 1)
			{
				if(!game.cameras[i].follow || game.cameras[i].follow === undefined) { continue; }
			
				var charac = game.cameras[i].follow;
				
				this.speed.push(charac.speed);
				this.x.push(charac.x);
				this.y.push(charac.y);
			}
			
			this.speed.sort();
			this.x.sort();
			this.y.sort();
		}
	},
	
	microtime: function()
	{
		var unixtime_ms = new Date().getTime();
		var sec = parseInt(unixtime_ms / 1000);
    
		return unixtime_ms / 1000;
	},
	
	click: function(e)
	{	
		if(!game.started)
		{
			game.started = true;
			game.paused = false;
			game.cameras[0].follow.alive = true;
			return;
		}
	},
	
	keydown: function(e)
	{
		if(game.usedKeys.indexOf(e.keyCode) > -1)
		{
			e.preventDefault();
		}
	
		if(game.keys.indexOf(e.keyCode) == -1)
		{
			game.keys.push(e.keyCode);
		}
		
		console.log(game.keys);
	},
	
	keyup: function(e)
	{
		if(game.usedKeys.indexOf(e.keyCode) > -1)
		{
			e.preventDefault();
		}
	
		var index = game.keys.indexOf(e.keyCode);
		if(index != -1)
		{
			game.keys.splice(index, 1);
		}
	},
	
	unPress: function(keycode)
	{			
		var index = game.keys.indexOf(keycode);
		if(index != -1)
		{
			game.keys.splice(index, 1);
		}
	},
	
	isPressed: function(keycode)
	{
		if(game.keys.indexOf(keycode) == -1)
		{
			return false;
		}
		return true;		
	}
}