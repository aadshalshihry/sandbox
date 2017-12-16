angular.module('home')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: 'app/Home/view/rootHome.html'
	})
	.when("/signIn", {
		templateUrl: 'app/Home/view/sign_in.html'
	})
	.when("/signUp", {
		templateUrl: 'app/Home/view/sign_up.html'
	})
	.when("/signOut", {
		templateUrl: 'app/Home/view/sign_out.html'
	})
	.otherwise({
		templateUrl: 'app/Home/view/rootHome.html'
	});
}]);