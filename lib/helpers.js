'use strict';

var moment = require('moment');

var registerHelpers = function(Handlebars) {
	Handlebars.registerHelper('formatDate', function(date) {
		return moment(date).format("D MMMM, YYYY");
	});
};

module.exports = registerHelpers;