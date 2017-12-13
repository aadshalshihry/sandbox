'use strict'

angular.module('home')

.controller('homeCtrl', ['$scope', '$localStorage', '$http', '$window',
  function($scope, $localStorage,  $http, $window) {
    var vm = this;
    var apiUrl = "http://localhost:3030/"
    

    // Check if it is sign in
    vm.isSingIn = function() {
      // let session = $cookies.get("userAuth");
      // if (session) {
      //   $window.location.href = '/';
      // }
    }

    // Sign in
    vm.getUserAuth = function() {
      let data = {
        username: vm.username,
        password: vm.password
      }

      let expDate = new Date();

      expDate.setDate(expDate.getDate() + 1);

      $http.post(apiUrl + 'api/auth', data)
        .then(function(response) {
          console.log($localStorage);
          // $cookies.put("userAuth", response.data.token, {
          //   'expires': expDate
          // });
          // console.log(response);
          // $window.location.href = '/';
        }, function(response) {
          console.log("[-]", response);
        });
    }


    // signout
    vm.signOut = function() {
      // $cookies.remove("userAuth");
      $window.location.href = '/';
    }

    // check of user has auth
    vm.userHasAuth = function() {
    	// if($cookies.get("userAuth")){
    	// 	vm.data = $cookies.get("userAuth");
    	// 	return $cookies.get("userAuth");
    	// } else {
    	// 	return null;
    	// }
    }



  }
])
