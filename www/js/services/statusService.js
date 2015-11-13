function StatusService(apiService, storageService, $filter) {
  var PHONE_STORAGE_KEY = 'user.phone-num';
  //var userPhoneNumber = '05456793984';//storageService.get(PHONE_STORAGE_KEY);
  var PUSH_TOKEN = 'd2gobv25Ruc:APA91bGwYOOwyHBwgdvxyeCebenGBd5-xskrbd34GudGBvKKbnU_Lln9Ny85vtPXWqLc6bg5FEqbdJdZuIB5jz_-pW_tdW6013ZQlYzVyTFJD_vJshcaRN5wYuX8OvVKgOak4SM-BFY0';
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
      "location": {"lat": +position.longtitude, "log": +position.latitude},
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
