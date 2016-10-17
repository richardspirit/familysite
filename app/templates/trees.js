'use strict';

angular.module('myApp.trees', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/templates', {
    templateUrl: 'templates/trees.html',
    controller: 'TreesCtrl'
  });
}])

.controller('TreesCtrl', [function() {

}]);
