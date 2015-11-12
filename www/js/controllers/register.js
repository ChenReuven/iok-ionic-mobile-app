function RegisterCtrl(statusService, storageService, $state, contactService, geoLocationService) {

  var vm = this;
  var PHONE_STORAGE_KEY = 'user.phone-num';
  var DEFAULT_AREA_CODE = '972';
  var PHONE_GEOLOCATION_LAT_KEY = 'user.geolocation-lang';
  var PHONE_GEOLOCATION_LONG_KEY = 'user.geolocation-long';

  vm.phonesAreaCode = contactService.getPhonesAreaCode();
  vm.phoneAreaCode = DEFAULT_AREA_CODE;


  geoLocationService.getCurrentLocation()
    .then(function (position) {
      storageService.set(PHONE_GEOLOCATION_LAT_KEY, position.coords.latitude);
      storageService.set(PHONE_GEOLOCATION_LONG_KEY, position.coords.longitude);
    });

  vm.submitNumber = function () {
    if (vm.phoneNumber && vm.phoneNumber !== '') {
      var fullUserNumber = vm.phoneAreaCode + vm.phoneNumber;
      storageService.set(PHONE_STORAGE_KEY, fullUserNumber);
      statusService.sendStatus();

      $state.go('main');

    }

  }

}

RegisterCtrl.$inject = ['statusService', 'storageService', '$state', 'contactService', 'geoLocationService'];

angular.module('iok').controller('RegisterCtrl', RegisterCtrl);
