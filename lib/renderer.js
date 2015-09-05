'use strict';

var marked = require('marked');

var renderer = function(config) {
	var markedRenderer = new marked.Renderer();
	
	var checkDomain = function(url) {
		if ( url.indexOf('//') === 0 ) { url = config.protocol + url; }
		return url.toLowerCase().replace(/([a-z])?:\/\//,'$1').split('/')[0];
	};

	var isExternal = function(url) {
		return ( ( url.indexOf(':') > -1 || url.indexOf('//') > -1 ) && checkDomain(config.url) !== checkDomain(url) );
	};

	markedRenderer.link = function(href, title, text) {
		var link = marked.Renderer.prototype.link.call(this, href, title, text);

		console.log(href, isExternal(href));

		if(isExternal(href)) {
			return link.replace('<a','<a target="_blank" ');
		}

		return link;
	};

	return markedRenderer;
};

module.exports = renderer;
