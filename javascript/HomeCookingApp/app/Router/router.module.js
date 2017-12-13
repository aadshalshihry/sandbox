'use strict'

angular.module('router', [])
.config(['$stateProvider', '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider) {
 	$urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);

    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            template: '<h1>Home</h1>'
            // templateUrl: 'partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            template: '<h1>About</h1>'
        })
        .state('signIn', {
        	url: '/signIn',
        	templateUrl: 'app/Home/view/sign_in.html',
        	controllerUrl: 'app/Home/controllers/home.controller.js'
        })
        .state('signOut', {
        	url: '/signOut',
        	templateUrl: 'app/Home/view/sign_out.html',
        	controllerUrl: 'app/Home/controllers/home.controller.js'
        })
}])

