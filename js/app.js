var myApp = angular.module('myApp',['ngRoute','ngAria']);
myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'MainController'
            })
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'AboutController'
            });

             
    

});
myApp.constant('Configuration', {
	
	
	
	
});