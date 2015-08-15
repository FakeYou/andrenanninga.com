var camera = {
	x: 0,
	y: 0,
	screenX: 0,
	screenY: 0,
	width: 0,
	height: 0,
	
	follow: null,
	deadTimer: 0,
	alive: true,
	
	tick: function tick(delta)
	{
		if(this.follow && this.follow !== undefined)
		{
			this.x = this.follow.x + (this.follow.width / 2) - (this.width / 2);
			this.y = this.follow.y + (this.follow.height / 2) - (this.height / 2);
		}
		
		if(!this.follow.alive)
		{
			this.deadTimer += delta;
			if(this.deadTimer > 5)
			{
				this.alive = false;
			}
		}
	}
}