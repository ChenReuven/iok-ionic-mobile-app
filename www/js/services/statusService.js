function StatusService(apiService, storageService, $filter) {
  var PHONE_STORAGE_KEY = 'user.phone-num';
  //var userPhoneNumber = '05456793984';//storageService.get(PHONE_STORAGE_KEY);
  var PUSH_TOKEN = 'cuwYRQ_Z7oE:APA91bEn6EN45siqmuAw-jpbZ8bIFr-AtBAKW1n0mWu31-lG8YG3GZ-gjv4OWcDjU8gFO-ldDHVg-qWSi8BazvKCVO6kgGp_9xBalLjInpIz9vqbEVnHVFRECfZViWhOVbxuuRuY41pD';
  var PHONE_GEOLOCATION_LAT_KEY = 'user.geolocation-lang';
  var PHONE_GEOLOCATION_LONG_KEY = 'user.geolocation-long';

  var getGeoLocationFromLocal = function () {
    return {
      latitude: storageService.get(PHONE_GEOLOCATION_LAT_KEY),
      longtitude: storageService.get(PHONE_GEOLOCATION_LONG_KEY)
    }

  }

  this.createStatusData = function () {
    var position = getGeoLocationFromLocal();
    var formatPhoneNumber = $filter('phoneFormatter')(storageService.get('user.phone-num'));
    return {
      "phoneNumber": formatPhoneNumber,
      "device": "ANDROID",
      "pushToken": PUSH_TOKEN,
      "location": {"lat": +position.latitude, "log": +position.longtitude},
      "message": ""
    };
  };

  this.sendStatus = function () {
    return apiService.sendStatus(this.createStatusData());
  };

  this.getContactsStatusByPhoneNumbers = function (phoneNumbers) {
    return apiService.getContactsStatus(phoneNumbers);
  }

  this.requestStatusOfContact = function (phoneNumber) {
    return apiService.requestStatusByNumber(phoneNumber);
  }
}

StatusService.$inject = ['apiService', 'storageService', '$filter'];

angular.module('iok').service('statusService', StatusService);
