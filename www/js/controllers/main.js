function MainCtrl(statusService, contactService, geoLocationService, storageService) {

  var vm = this;
  var PHONE_GEOLOCATION_LAT_KEY = 'user.geolocation-lang';
  var PHONE_GEOLOCATION_LONG_KEY = 'user.geolocation-long';


  geoLocationService.getCurrentLocation()
    .then(function (position) {
      storageService.set(PHONE_GEOLOCATION_LAT_KEY, position.coords.latitude);
      storageService.set(PHONE_GEOLOCATION_LONG_KEY, position.coords.longitude);
    });


  contactService.getAllContacts()
    .then(function (contacts) {

      vm.contacts = contacts;

    }, function (err) {

    });


  console.log('Main');


}

MainCtrl.$inject = ['statusService', 'contactService', 'geoLocationService', 'storageService'];

angular.module('iok').controller('MainCtrl', MainCtrl);
