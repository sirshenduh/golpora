angular.module('app',[
	'ngRoute',
	'ngAnimate',
  'ngMaterial'
])
.config(['$routeProvider','$mdThemingProvider',
  function($routeProvider, $mdThemingProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/phones'
      });

    $mdThemingProvider.theme('default');

}]);