const app = angular.module("ParksApp", []);

app.controller('RJBController', ['$http', function($http){
  const controller = this;
  this.loggedInUser = false;
  this.indexOfEditForm = null;
  this.indexOfInfoForm = null;
  this.showEditForm = false;
  this.includePath = ''
  this.signupBoolean = false;
  this.loginBoolean = true;
  this.infoBoolean = false;
  this.changeInclude = (path) => {
    this.includePath = 'partials/' + path + '.html'
  }
  this.includePathForRegistration = 'partials/login.html'
  this.changeIncludeForRegistration = (path) => {
    this.includePathForRegistration = 'partials/' + path + '.html'
  }
  this.toggleInfoField = (index) => {
    if(controller.indexOfInfoForm === index) {
        controller.indexOfInfoForm = null;
    } else {
        controller.indexOfInfoForm = index;
        controller.indexOfEditForm = null;
    }
  }




  // delete a parks
    this.deletePark = function($index){
      console.log($index);
      $http({
        method:'DELETE',
        url: '/parks/' + $index
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
          controller.parks = response.data.parks;
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
        controller.getParks();
        controller.changeInclude('getdelete')
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
      controller.getParks();
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
            controller.getParks();
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

  this.toggleEditForm = function(index){
    if(controller.indexOfEditForm === index) {
        controller.indexOfEditForm = null;
    } else {
        controller.indexOfEditForm = index;
        controller.indexOfInfoForm = null;
    }
  }

  this.editPark = function(park, index){
    console.log(this.updatedPark.visited);
    $http({
      url: '/parks/' + park._id + '/' + index,
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
          controller.indexOfEditForm = null;
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
      controller.getParks();
    }
  });






}]); // this ends the RJBController
