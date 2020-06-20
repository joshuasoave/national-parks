const app = angular.module("ParksApp", []);

app.controller('RJBController', ['$http', function($http){
  const controller = this;
  this.loggedInUser = false;

  this.createPark = function () {
    $http(
      {
        url:'/parks',
        method:'POST',
        data: {
          name: this.name,
          image: this.image,
          location: this.location,
          description: this.description,
          priority: this.priority,
          visited: this.visited,
          note: this.note
        }
      }
    ).then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    )
  }

  this.signup = function(){
    $http({
      url:'/users',
      method: 'POST',
      data: {
        username: this.signupUsername,
        password: this.signupPassword,
        name: this.signupName
      }
    }).then(function(response){
      console.log(response.data)
      controller.loggedInUser = response.data;
    })
  }

  this.login = function (){
    $http({
      url: '/sessions',
      method: 'POST',
      data: {
        username: this.loginUsername,
        password: this.loginPassword
      }
    }).then(function(response){
        if(response.data.username){
            controller.loggedInUser = response.data;
        } else {
            controller.loginUsername = null;
            controller.loginPassword = null;
        }
    })
  };

  this.logout = function (){
    $http({
      url: '/sessions',
      method: 'DELETE'
    }).then(function(){
      controller.loggedInUser = false;
    })
  };

  $http({
    method: 'GET',
    url: '/sessions'
  }).then(function(response){
    if(response.data.username){
      controller.loggedInUser = response.data;
    }
  });





}]); // this ends the RJBController
