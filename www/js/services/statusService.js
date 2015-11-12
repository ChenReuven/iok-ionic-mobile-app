function StatusService(apiService, storageService) {
  var PHONE_STORAGE_KEY = 'user.phone';
  var userPhoneNumber = storageService.get(PHONE_STORAGE_KEY);
  var PUSH_TOKEN = 'cuwYRQ_Z7oE:APA91bEn6EN45siqmuAw-jpbZ8bIFr-AtBAKW1n0mWu31-lG8YG3GZ-gjv4OWcDjU8gFO-ldDHVg-qWSi8BazvKCVO6kgGp_9xBalLjInpIz9vqbEVnHVFRECfZViWhOVbxuuRuY41pD';

  this.createStatusData = function () {
    return {
      "phoneNumber": userPhoneNumber,
      "device": "Android",
      "pushToken": PUSH_TOKEN,
      //"location": {"lat": 31.75535435543435, "log": -4.9766574654343},
      "message": ""
    };
  };

  this.sendStatus = function () {
    return apiService.sendStatus(this.createStatusData());
  };
}

StatusService.$inject = ['apiService', 'storageService'];

angular.module('iok').service('statusService', StatusService);
