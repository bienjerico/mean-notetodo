// Define the `NoteListController` controller on the `App` module
app.controller('NoteListController', function NoteListController($scope, $uibModal,$http,dataNoteToTodo,dataTodoToNote) {

  $("#notelistcontroller").show();

  $scope.$on('data_todotonote',function(){
      var entrytotitle =  dataTodoToNote.getData();
      console.log("data from entry: "+entrytotitle);
      $scope.newnotes = { title:entrytotitle };
  });

  // switch data from note to todo
  $scope.switchNoteToTodo = function($scope){
    console.log($scope.title + " " +$scope.text);
    dataNoteToTodo.sendData($scope.title + " " +$scope.text);
  }

  // reload data binding
  var displayNote = function(){
    console.log(3);
    $http.get('/api/note').success(function(res){
      console.log("I got the data I requested");
      console.log(4);
      $scope.notes = res;
      });
  }

  // on load note
  displayNote();

  $scope.saveNewNote = function(id){

    $scope.formNote.$setPristine();  // reset the form validation

    // save new note
    if(id == null) {
      console.log(1);
          $http.post('/api/note',$scope.newnotes).success(function(res){
            console.log(2);
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

  $scope.viewNoteForDelete = function(id,size){
    $http.get('/api/note/'+id).success(function(res) {
        $scope.displayNote = res;
    });
    var modalInstance = $uibModal.open({
      templateUrl: 'modalNoteContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      scope: $scope
    });
  }

/*
  $scope.propertyName = 'date';
  $scope.reverse = true;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
*/
});
