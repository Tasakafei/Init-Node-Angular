'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ihm', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl: 'views/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });

}]);
