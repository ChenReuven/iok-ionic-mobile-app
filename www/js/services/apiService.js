function ApiService($http, $filter) {

  var BASE_URL = 'http://52.19.178.116';

  function formatNumber(phoneNumber) {
    return $filter('phoneFormatter')(phoneNumber)
  }

  this.sendStatus = function (statusData) {
    var request = JSON.stringify(statusData);
    return $http.put(BASE_URL + '/api/iok', request);
  };

  this.getContactsStatus = function (phoneNumbersList) {
    var requestedNumberList = phoneNumbersList.map(function (number) {
      return '' + $filter('phoneFormatter')(number);
    });
    return $http.post(BASE_URL + '/api/friends', {
      friends: requestedNumberList
    });
  };

  this.requestStatusByNumber = function (phoneNumber) {
    phoneNumber = formatNumber(phoneNumber);
    return $http.post(BASE_URL + '/api/askIfOk', {
      friends: [phoneNumber]
    })
  }

}

angular.module('iok').service('apiService', ApiService);
