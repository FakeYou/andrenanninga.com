var BallEntity = {
	type: "rock",
	x: 0, 
	y: 0, 
	width: 20,
	height: 20,
	speed: 10,
	rotateSpeed: 0,
	angle: null,
	colors: ["#098D99", "#E7620F", "#80985E", "#8B7F6B", "#6E7388", "#C1BBA7", "#98C8D0"],
	color: null,
	rock: [],
	rocks: [
		[[33, 10], [79, 15], [86, 30], [78, 38], [78, 59], [88, 73], [76, 85], [39, 89], [18, 75], [12, 54], [21, 35]]
	],
	
	tick: function(delta)
	{
		if(this.rock.length == 0)
		{
			this.rock = this.rocks.random();
			
			var w = this.width / 100;
			var h = this.height / 100;
			for(var i = this.rock.length - 1; i >= 0; --i)
			{
				this.rock[i][0] += getRandomArbitary(-10, 10);
				this.rock[i][1] += getRandomArbitary(-10, 10);
			
				this.rock[i][0] *= w;
				this.rock[i][1] *= h;				
			}
		}
		
		if(!this.color || this.color == undefined)
		{
			this.color = this.colors.random();
		}
		
		if(!this.angle || this.angle == undefined)
		{
			this.angle = getRandomInt(0, 360);
			this.rotateSpeed = getRandomArbitary(-10, 10);
		}
		
		this.angle += this.rotateSpeed * delta;
	}, 
	
	paint: function()
	{
		
		canvas.ctx.fillStyle = this.color;
		canvas.ctx.beginPath();
		canvas.ctx.translate(this.x , this.y);
		canvas.ctx.translate(this.width / 2 , this.height / 2);
		canvas.ctx.rotate(this.angle * (Math.PI / 180))
		canvas.ctx.translate(-this.width / 2 , -this.height / 2);
		
		canvas.ctx.moveTo(this.rock[0][0], this.rock[0][1]);
		for(var i = this.rock.length - 1; i >= 0; --i)
		{
			canvas.ctx.lineTo(this.rock[i][0], this.rock[i][1]);
		}
		
		canvas.ctx.closePath();
		canvas.ctx.fill();
	
		/*
		canvas.ctx.strokeStyle = "rgba(140, 140, 140, 0.4)";
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(-10, this.height / 2);
        canvas.ctx.bezierCurveTo(-10, -20, this.width + 10, -20, this.width + 10, this.height / 2);
        canvas.ctx.lineWidth = 5;
        canvas.ctx.stroke();
		*/
	}
}

BallEntity = $.extend(true, {}, Entity, BallEntity);