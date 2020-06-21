const app = angular.module("ParksApp", []);

app.controller('RJBController', ['$http', function($http){
  const controller = this;
  this.loggedInUser = false;
  this.showEditForm = false;
  
  // delete a parks
    this.deletePark = function(park){
      $http({
        method:'DELETE',
        url: '/parks/' + park._id
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
        console.log(response.data);
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


this.getParks();


}]); // this ends the RJBController
