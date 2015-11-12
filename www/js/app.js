angular.module('iok', ['ionic', 'ionic.service.core', 'ngCordova'])

  .run(function ($ionicPlatform, notificationService) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      notificationService.handleNotifications();

    });
  })

  .config(function ($stateProvider, $urlRouterProvider, storageServiceProvider) {

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('splash', {
        url: '/splash',
        templateUrl: "templates/splash.html",
        controller: 'SplashCtrl as splash'
      })
      .state('main', {
        url: '/main',
        templateUrl: "templates/main.html",
        controller:'MainCtrl as main'
      });


    $urlRouterProvider.otherwise('/splash'); // TODO: for testing
    var userPhoneNumber = storageServiceProvider.get('userPhoneNumber');
    /*if (userPhoneNumber) {
      $urlRouterProvider.otherwise('/splash');
    } else {
      $urlRouterProvider.otherwise('/main');
     }*/

  });
