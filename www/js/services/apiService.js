function ApiService($http) {
  this.sendStatus = function (statusData) {
    var request = JSON.stringify(statusData);
    return $http.put('/api/iok', request);
  };

  this.getContactsStatus = function () {

  };

  this.sendContactsList = function () {

  };

}

angular.module('iok').service('apiService', ApiService);
