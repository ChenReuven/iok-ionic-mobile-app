function StatusService(apiService, storageService, $filter, $q) {
  var PHONE_STORAGE_KEY = 'user.phone-num';
  //var userPhoneNumber = '05456793984';//storageService.get(PHONE_STORAGE_KEY);
  //var PUSH_TOKEN = 'd2gobv25Ruc:APA91bGwYOOwyHBwgdvxyeCebenGBd5-xskrbd34GudGBvKKbnU_Lln9Ny85vtPXWqLc6bg5FEqbdJdZuIB5jz_-pW_tdW6013ZQlYzVyTFJD_vJshcaRN5wYuX8OvVKgOak4SM-BFY0';
  var PUSH_TOKEN;
  var PHONE_GEOLOCATION_LAT_KEY = 'user.geolocation-lang';
  var PHONE_GEOLOCATION_LONG_KEY = 'user.geolocation-long';

  var getGeoLocationFromLocal = function () {
    return {
      latitude: storageService.get(PHONE_GEOLOCATION_LAT_KEY),
      longtitude: storageService.get(PHONE_GEOLOCATION_LONG_KEY)
    }

  }

  this.createNewTocken = function () {
    var d = new $q.defer();

    var push = new Ionic.Push({
      "debug": true,
      "onNotification": function (notification) {
        var payload = notification.payload;
        console.log(notification, payload);
      },
      "onRegister": function (data) {
        console.log(data.token);
      },
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    });

    var push = new Ionic.Push();
    var user = Ionic.User.current();

    var callback = function (pushToken) {
      console.log('Registered token:', pushToken.token);
      PUSH_TOKEN = pushToken.token;

      d.resolve();
      //user.addPushToken(pushToken);
      //user.save(); // you NEED to call a save after you add the token
    }

    push.register(callback);

    return d.promise;
  }


  this.createStatusData = function () {
    var position = getGeoLocationFromLocal();
    var formatPhoneNumber = $filter('phoneFormatter')(storageService.get('user.phone-num'))
    var PUSH_TOKEN = '111-DUMMY';
    return {
      "phoneNumber": formatPhoneNumber,
      "device": "ANDROID",
      "pushToken": PUSH_TOKEN,
      "location": {"lat": +position.longtitude, "log": +position.latitude},
      "message": ""
    };
  };

  this.sendStatus = function () {
    var that = this;
    //return this.createNewTocken().then(function () {
      return apiService.sendStatus(that.createStatusData());
    //})

  };

  this.getContactsStatusByPhoneNumbers = function (phoneNumbers) {
    return apiService.getContactsStatus(phoneNumbers);
  }

  this.requestStatusOfContact = function (phoneNumber) {
    return apiService.requestStatusByNumber(phoneNumber);
  }
}

StatusService.$inject = ['apiService', 'storageService', '$filter', '$q'];

angular.module('iok').service('statusService', StatusService);
