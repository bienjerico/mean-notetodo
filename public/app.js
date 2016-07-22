// Define the `noteApp` module
var app = angular.module('app', []);

// Define the `NoteListController` controller on the `noteApp` module
app.controller('NoteListController', function NoteListController($scope,$http) {

  var displayNote = function(){
    $http.get('/api/note').success(function(res){
      console.log("I got the data I requested");
      $scope.notes = res;
    });
  }

  // on load note
  displayNote();

  $scope.saveNewNote = function(id){
    // save new note
    if(id == null) {
          $http.post('/api/note',$scope.newnotes).success(function(res){
            console.log(res);
            displayNote();
          });
    // save update
     } else {
           $http.put('/api/note/'+ id,$scope.newnotes).success(function(res){
              displayNote();
           });
     }
      $scope.newnotes = {};
  }

  // delete note
  $scope.deleteNote = function(id) {
        $http.delete('/api/note/'+id).success(function(res){
            displayNote();
        });
    }

  // edit note
  $scope.editNote = function(id) {
      $http.get('/api/note/'+id).success(function(res){
          $scope.newnotes = res;
      });
  }

  $scope.propertyName = 'title';
  $scope.reverse = true;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };


});

// Define the `TodoListController` controller on the `todoApp` module
app.controller('TodoListController', function TodoListController($scope,$http) {

  var displayTodo = function(){
    $http.get('/api/todo').success(function(res){
      console.log("I got the data I requested");
      $scope.todos = res;
    });
  }

  // on load todo
  displayTodo();

  $scope.saveNewTodo = function(id){
    // new
    if(id == null) {
           $http.post('/api/todo',$scope.newtodos).success(function(response){
             console.log(response);
             displayTodo();
           });
    // update
     } else {
       $http.put('/api/todo/'+ id,$scope.newtodos).success(function(res){
          displayTodo();
       });
     }

      $scope.newtodos = {};
  }

  // delete todo
  $scope.deleteTodo = function(id) {
        $http.delete('/api/todo/'+id).success(function(res){
            displayTodo();
        });
    }

  // edit note
  $scope.editTodo = function(id) {
      $http.get('/api/todo/'+id).success(function(res){
          $scope.newtodos = res;
      });
  }

  $scope.isDone = function(id,$scope){
    console.log($scope);
    $http.put('/api/todo/'+id,$scope).success(function(res){
      console.log(res);
      displayTodo();
    });
  }


});
