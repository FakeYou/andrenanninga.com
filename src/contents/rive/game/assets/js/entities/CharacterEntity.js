var CharacterEntity = 
{
	character: true,
	alive: false,
	x: 0,
	y: 0,
	width: 10,
	height: 10,
	speed: 75,
	
	tick: function(delta) 
	{ 
		this.x += this.speed * 2 * delta;
		
		if(!this.alive) { return; }	
	
		if(game.isPressed(87)) 
		{ 
			this.y -= this.speed * delta;
		} 
		if(game.isPressed(83)) 
		{ 
			this.y += this.speed * delta;
		}  
		if(game.isPressed(65)) 
		{ 
			this.x -= this.speed * delta;
		} 
		if(game.isPressed(68)) 
		{ 
			this.x += this.speed * delta;
		}
	
		for(var i = game.entities.length - 1; i >= 0; --i)
		{
			var entity = game.entities[i];
			
			if(entity.type != "rock")
			{
				continue;
			}
			
			var dX = Math.abs(entity.x - this.x);
			var dY = Math.abs(entity.y - this.y);
			
			if(dX < 100 && dY < 100)
			{
				if(this.x < entity.x + entity.width && this.x + this.width > entity.x &&
					this.y < entity.y + entity.width && this.y + this.width > entity.y)
				{
					this.alive = false;					
					break;
				}
			}
		}
	},
	
	paint: function()
	{
		if(!this.alive) { return; }
		
		//canvas.ctx.fillStyle = "orange";
		//canvas.ctx.fillText(Math.round(this.x) + ", " + Math.round(this.y), this.x - 10, this.y -10);
		
		canvas.ctx.fillStyle = 'orange';
		canvas.fillRect(this.x, this.y, this.width, this.height);
	}
}

CharacterEntity = $.extend(true, {}, Entity, CharacterEntity);