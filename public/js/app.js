const app = angular.module("ParksApp", []);

app.controller('RJBController', ['$http', function($http){
  const controller = this;
  this.loggedInUser = false;


// delete a parks
  this.deletePark = function(park){
    $http({
      method:'DELETE',
      url: '/parks/' = park._id
    }).then(
      function(response){
        controller.getParks();
      },
      function(error){
        console.log(error);
      })
  }

// get all the Parks
  this.getParks = function(){
    $http({
      method: 'GET',
      url:'/parks'
    }).then(
      function(response){
        controller.parks = response.data;
      }, function(error){
        console.log(error);
    })
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


this.getParks();


}]); // this ends the RJBController
