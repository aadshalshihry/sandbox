angular.module('home')

.controller('navCtrl', ['$scope',
  function($scope, $cookies) {
    var vm = this;
    
    // check of user has auth
    vm.userHasAuth = function() {
    	// if($cookies.get("userAuth")){
    	// 	return $cookies.get("userAuth");
    	// } else {
    	// 	return null;
    	// }
    }


  }
])
