// Define the `noteApp` module
var app = angular.module('app', []);

var noteData = [
    {
      id: 0,
      title: 'Nexus S',
      text: 'Fast just got faster with Nexus S.'
    }, {
      id: 1,
      title: 'Motorola XOOM™ with Wi-Fi',
      text: 'The Next, Next Generation tablet.'
    }, {
      id: 2,
      title: 'MOTOROLA XOOM™',
      text: 'The Next, Next Generation tablet.'
    }
  ];

// Define the `NoteListController` controller on the `noteApp` module
app.controller('NoteListController', function NoteListController($scope) {

  $scope.notes = noteData;

  var idlastnote = 3;

  $scope.saveNewNote = function(){

    // new
    if($scope.newnotes.id == null) {
           $scope.newnotes.id = idlastnote++;
           $scope.notes.push($scope.newnotes);  
    // update
     } else {
          for(i in $scope.notes) {
                  if($scope.notes[i].id == $scope.newnotes.id) {
                      $scope.notes[i] = $scope.newnotes;
                  }
           }           
     }

      $scope.newnotes = {};
  }

  $scope.deleteNote = function(id) {
        
        for(i in $scope.notes) {
            if($scope.notes[i].id == id) {
                $scope.notes.splice(i,1);
                $scope.newnotes = {};
            }
        }
        
    }

  $scope.editNote = function(id) {
      for(i in $scope.notes) {
          if($scope.notes[i].id == id) {
              $scope.newnotes = angular.copy($scope.notes[i]);
          }
      }
  }

});




var todoData = [
    {
      id: 0,
      entry: 'Nexus S',
      che: false
    }, {
      id: 1,
      entry: 'Motorola XOOM™ with Wi-Fi',
      che: true
    }, {
      id: 2,
      entry: 'MOTOROLA XOOM™',
      che: false
    }
  ];

// Define the `TodoListController` controller on the `todoApp` module
app.controller('TodoListController', function TodoListController($scope) {

  $scope.todos = todoData;


  var idlasttodo = 3;

  $scope.saveNewTodo = function(){
    // new
    if($scope.newtodos.id == null) {
           $scope.newtodos.id = idlasttodo++;
           $scope.todos.push($scope.newtodos);  
    // update
     } else {
          for(i in $scope.todos) {
                  if($scope.todos[i].id == $scope.newtodos.id) {
                      $scope.todos[i] = $scope.newtodos;
                  }
           }           
     }

      $scope.newtodos = {};
  }




});


