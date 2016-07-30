
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.submitNoteDeletion = function (id) {
    $uibModalInstance.close();
    $scope.deleteNote(id);
  };

  $scope.cancelNoteDeletion = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.submitTodoDeletion = function (id) {
    $uibModalInstance.close();
    $scope.deleteTodo(id);
  };

  $scope.cancelTodoDeletion = function () {
    $uibModalInstance.dismiss('cancel');
  };

});
