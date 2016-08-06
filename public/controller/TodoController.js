// Define the `TodoListController` controller on the `App` module
app.controller('TodoListController', function TodoListController($scope,$uibModal,$http,dataNoteToTodo,dataTodoToNote) {

  $("#todolistcontroller").show();

  $scope.$on('data_notetotodo',function(){
      var titletext =  dataNoteToTodo.getData();
      console.log("data from note: "+titletext);
      $scope.newtodos = { entry:titletext };
  });

  // switch data from todo to note
  $scope.switchTodoToNote = function($scope){
    console.log($scope.entry);
    dataTodoToNote.sendData($scope.entry);
  }

  // reload data binding
  var displayTodo = function(){
    $http.get('/api/todo').success(function(res){
      console.log("I got the data I requested");
      $scope.todos = res;
    });
  }

  // on load todo
  displayTodo();

  $scope.saveNewTodo = function(id){

    $scope.formTodo.$setPristine();  // reset the form validation

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

  $scope.viewTodoForDelete = function(id,size){
    $http.get('/api/todo/'+id).success(function(res) {
        $scope.displayTodo = res;
    });
    var modalInstance = $uibModal.open({
      templateUrl: 'modalTodoContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      scope: $scope
    });
  }


});
