const app = angular.module("ParksApp", []);

app.controller('RJBController', ['$http', function($http){
  const controller = this;
  this.loggedInUser = false;
  this.showEditForm = false;

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

  this.toggleEditForm = function(){
    controller.showEditForm = !controller.showEditForm;
  }

  this.editPark = function(park){
    $http({
      url: '/parks' + park._id,
      method: 'PUT',
      data: {
        name: this.updatedPark.name,
        image: this.updatedPark.image,
        location: this.updatedPark.location,
        description: this.updatedPark.description,
        priority: this.updatedPark.priority,
        visited: this.updatedPark.visited,
        note: this.updatedPark.note
      }
    }).then(
        function(response){
          controller.updatedPark = {};
          controller.showEditForm = false;
          controller.getParks();
        },
        function(error){

        }
    );
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
