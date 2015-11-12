function StorageService() {
  this.set = function (key, data) {
    window.localStorage.setItem(key, data);
  };

  this.get = function (key) {
    return window.localStorage.getItem(key);
  };

  this.$get = function () {
    return {
      set: this.set,
      get: this.get
    }
  }
}

StorageService.$inject = [];

angular.module('iok').provider('storageService', StorageService);
