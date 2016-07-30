app.factory('dataNoteToTodo',function($rootScope){
  var service = {};
  service.data = false;
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_notetotodo');
  };
  service.getData = function(){
    return this.data;
  };
  return service;
});


app.factory('dataTodoToNote',function($rootScope){
  var service = {};
  service.data = false;
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_todotonote');
  };
  service.getData = function(){
    return this.data;
  };
  return service;
});
