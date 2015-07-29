'use strict';

window.Helpers = {
	'createCanvas': function(width, height) {
		width = width || 1000;
		height = height || 640;

		var playground = document.querySelector('#playground');
		var headerImage = document.querySelector('img.header');
		var canvas = document.createElement('canvas');

		// sanity check
		if(!playground) { return console.error('#playground not found'); }

		// hide img.header if it exists
		if(headerImage) {
			headerImage.className = headerImage.className + ' hidden';
		}

		canvas.setAttribute('id', 'canvas');
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);

		// append canvas to playground div
		playground.appendChild(canvas);

		// make the canvas responsive
		Helpers.responsiveCanvas();
	},

	'responsiveCanvas': function() {
		var playground = document.querySelector('#playground');
		var canvas = document.querySelector('#canvas');
		var article = document.querySelector('article');

		// sanity check
		if(!playground) { return console.error('#playground not found'); }
		if(!canvas) { return console.error('#canvas not found'); }
		if(!article) { return console.error('article not found'); }

		// the scale is calculated by taking the current width of the article element
		// and dividing it with the defined width of the canvas
		// we use the css transform property to set the scale of the canvas element
		// thus making it responsive
		var scale = Math.max(article.offsetWidth / canvas.width, 1);
		canvas.style['transform-origin'] = '0 0';
		canvas.style['transform'] = 'scale(' + scale + ')';

		// the playground needs to have a defined height otherwise the following elements
		// will still be placed based on the initial height
		playground.style['height'] = (canvas.height * scale) + 'px';

		// set this function to fire when the window is resize to keep it responsive
		// use _.throttle to limit the execution to once every 100ms
		window.onresize = _.throttle(Helpers.responsiveCanvas, 100);
	}
}
