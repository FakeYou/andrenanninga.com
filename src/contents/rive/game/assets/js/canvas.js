var canvas = {
	identifier: null,
	width: 0,
	height: 0,
	ctx: null,
	initialized: false,
	
	init: function() {
		if(this.identifier == null)
		{
			console.log('abort: identifier was not set, canvas could not be found');
			return false;
		}
		if(!jQuery)
		{
			console.log('abort: jQuery was not found');
			return false;
		}
		if($(this.identifier)[0] === undefined)
		{
			console.log('abort: canvas could not be found');
			return false;
		}
		
		this.ctx = $(this.identifier)[0].getContext("2d");
		this.initialized = true;
	},
	
	clear: function()
	{
		canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.width, this.height);
	},
	
	drawRect: function(x, y, width, height)
	{
		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		this.ctx.closePath();
		this.ctx.stroke();
	},	
	fillRect: function(x, y, width, height)
	{
		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		this.ctx.closePath();
		this.ctx.fill();
	},
	
	drawCircle: function(x, y, size)
	{
		var radius = size / 2;
	
		this.ctx.beginPath();
		this.ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
		this.ctx.closePath();
		this.ctx.stroke();
	},	
	fillCircle: function(x, y, size)
	{
		var radius = size / 2;
	
		this.ctx.beginPath();
		this.ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
		this.ctx.closePath();
		this.ctx.fill();
	},
	
	drawKey: function(x, y, symbol, width, height)
	{
		if(width == undefined) { width = 40; }
		if(height == undefined) { height = 40; }
	
		this.ctx.strokeStyle = '#999999';
		this.ctx.fillStyle = "#CCCCCC";
		this.ctx.lineWidth = 2;
		this.fillRect(x, y, width, height);
		this.drawRect(x, y, width, height);
		
		this.ctx.fillStyle = "#333333";
		this.ctx.font = "20px Calibri";
		this.ctx.textAlign = "center";
		this.ctx.fillText(symbol, x + width / 2, y + 28);
	},
	
	axis: function()
	{
		return;
	
		this.ctx.lineWidth = 1;
		
		this.ctx.beginPath();
		this.ctx.strokeStyle = "#FF0000";
		this.ctx.moveTo(-10, 0);
		this.ctx.lineTo(10, 0);
		this.ctx.closePath();
		this.ctx.stroke();
		
		this.ctx.beginPath();
		this.ctx.strokeStyle = "#0000FF";
		this.ctx.moveTo(0, -10);
		this.ctx.lineTo(0, 10);
		this.ctx.closePath();
		this.ctx.stroke();
	},
	
	noise: function(x, y, width, height)
	{
		for(var i = 0; i < width; i += 16)
		{
			for(var j = 0; j < height; j += 16)
			{
				number = getRandomInt(50, 200);
				opacity = getRandomInt(40, 60) / 100;
				
				this.ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";  
				this.ctx.fillRect(x + i, y + j, 16, 16);  
			}
		}
	}
};