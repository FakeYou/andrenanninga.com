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
		Helpers.responsivePlayground(canvas);
	},

	'createIframe': function(width, height, url) {
		width = width || 1000;
		height = height || 640;

		var playground = document.querySelector('#playground');
		var headerImage = document.querySelector('img.header');
		var iframe = document.createElement('iframe');

		// sanity check
		if(!playground) { return console.error('#playground not found'); }

		// hide img.header if it exists
		if(headerImage) {
			headerImage.className = headerImage.className + ' hidden';
		}

		iframe.setAttribute('id', 'iframe');
		iframe.setAttribute('width', width);
		iframe.setAttribute('height', height);
		iframe.setAttribute('frameborder', 0);
		iframe.setAttribute('scrolling', 'no');
		iframe.setAttribute('src', url);

		// append iframe to playground div
		playground.appendChild(iframe);

		// make the iframe responsive
		Helpers.responsivePlayground(iframe);
	},

	'responsivePlayground': function(element) {
		var playground = document.querySelector('#playground');
		var article = document.querySelector('article');

		// sanity check
		if(!playground) { return console.error('#playground not found'); }
		if(!element) { return console.error('no element given'); }
		if(!article) { return console.error('article not found'); }

		// the scale is calculated by taking the current width of the article element
		// and dividing it with the defined width of the element
		// we use the css transform property to set the scale of the element element
		// thus making it responsive
		var scale = Math.min(article.offsetWidth / element.width, 1);
		element.style['transform-origin'] = '0 0';
		element.style['transform'] = 'scale(' + scale + ')';

		// the playground needs to have a defined height otherwise the following elements
		// will still be placed based on the initial height
		playground.style['height'] = (element.height * scale) + 'px';

		// set this function to fire when the window is resize to keep it responsive
		// use _.throttle to limit the execution to once every 100ms
		var func = _.bind(Helpers.responsivePlayground, this, element);
		window.onresize = _.throttle(func, 100);
	}
}
