function SplashScreenCtrl($state, storageService, $timeout, contactService) {

  function showSplashScreen() {

    contactService.getAllContacts()
      .then(function () {

          var userPhoneNumber = storageService.get('user.phone-num');
          if (!userPhoneNumber) {
            $state.go('register');
          } else {
            $state.go('main');
          }
        },
        function (err) {
          console.log('contact list error =', err);
        });
  }

  // TODO: for test ONLY
  //$state.go('register');
  showSplashScreen();

}

SplashScreenCtrl.$inject = ['$state', 'storageService', '$timeout', 'contactService'];

angular.module('iok').controller('splashScreenCtrl', SplashScreenCtrl);
