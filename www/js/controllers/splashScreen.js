function SplashScreenCtrl($state, storageService, $timeout, contactService, PhonesConst, GeoLocationConst, geoLocationService) {

  function isUserPhoneExist() {
    return storageService.get(PhonesConst.USER_PHONE_NUMBER);
  }

  function showSplashScreen() {

    geoLocationService.getCurrentLocation()
      .then(function (position) {
        storageService.set(GeoLocationConst.PHONE_GEOLOCATION_LAT_KEY, position.coords.latitude);
        storageService.set(GeoLocationConst.PHONE_GEOLOCATION_LONG_KEY, position.coords.longitude);
      });

    contactService.getAllContacts()
      .then(function () {

          if (!isUserPhoneExist()) {
            $state.go('register');
          } else {
            $state.go('main');
          }
        },
        function (err) {
          console.error('contact list error =', err);
        });
  }

  // TODO: for test ONLY
  //$state.go('register');
  showSplashScreen();

}

SplashScreenCtrl.$inject = ['$state', 'storageService', '$timeout', 'contactService', 'PhonesConst', 'GeoLocationConst', 'geoLocationService'];

angular.module('iok').controller('splashScreenCtrl', SplashScreenCtrl);
