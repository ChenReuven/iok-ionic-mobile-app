function StorageService($window) {
  this.set = function (key, data) {
    $window.localStorage.setItem(key, data);
  };

  this.get = function (key) {
    return $window.localStorage.getItem(key);
  };
}

StorageService.$inject = ['$window'];

angular.module('iok').service('storageService', StorageService);
