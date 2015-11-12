function SplashScreenCtrl($state, storageService, $timeout) {

  var splashScreenTimeToShow = 2000;

  function showSplashScreen() {

    $timeout(function () {
      var userPhoneNumber = storageService.get('user.phone-num');

      // TODO: for test ONLY
      //$state.go('register');

      if (!userPhoneNumber) {
        $state.go('register');
      } else {
        $state.go('main');
      }
    }, splashScreenTimeToShow);

  }

  //showSplashScreen();

}

SplashScreenCtrl.$inject = ['$state', 'storageService', '$timeout'];

angular.module('iok').controller('splashScreenCtrl', SplashScreenCtrl);
