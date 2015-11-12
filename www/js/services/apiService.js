function ApiService($http) {
  this.sendStatus = function (statusData) {
    var BASE_URL = 'http://52.19.178.116';
    var request = JSON.stringify(statusData);
    return $http.put(BASE_URL + '/api/iok', request);
  };

  this.getContactsStatus = function (phoneNumbersList) {
    var requestedNumberList = phoneNumbersList.join(',');
    return $http.get(BASE_URL + '/api/iok?numbers=' + requestedNumberList);
  };

}

angular.module('iok').service('apiService', ApiService);
