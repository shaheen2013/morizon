'use strict';

angular.module('morizonApp')
	.constant('ENDPOINT_URI', 'http://localhost:9000/api/')
	.service('APIService', function($http, ENDPOINT_URI) {

		var path = 'scrapstat/';

		var service = this;

		service.getURL = function() {

			return ENDPOINT_URI + path;

		};

		service.getPusedData = function() {

			

		};

	});