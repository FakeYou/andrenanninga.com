var ParallexEntity = 
{
	type: "parallex",
	x: 0,
	y: 0,
	width: 1,
	height: 1,
	color: "rgba(0,0,0,0)",
	speed: 25,
	points: [],
	
	tick: function(delta) 
	{
		this.x += this.speed * delta;
	},
	
	paint: function()
	{
		canvas.ctx.fillStyle = this.color;
		canvas.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

ParallexEntity = $.extend(true, {}, Entity, ParallexEntity);