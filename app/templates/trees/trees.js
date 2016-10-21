'use strict';

angular.module('website.trees', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trees', {
    templateUrl: 'templates/trees/trees.html',
    controller: 'TreesCtrl'
  });
}])

.controller('TreesCtrl', [function() {

}]);