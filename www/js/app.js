angular.module('iok', ['ionic', 'ionic.service.core', 'ngCordova', 'angularMoment'])

  .run(function ($ionicPlatform, notificationService, $cordovaSplashscreen) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      // Handling Back Button
      $ionicPlatform.registerBackButtonAction(function () {
        event.preventDefault();
      }, 100);

      notificationService.handleNotifications();

    });
  })

  .config(function ($stateProvider, $urlRouterProvider, storageServiceProvider) {

    $stateProvider

      .state('splashscreen', {
        url: '/splashscreen',
        templateUrl: "templates/splashScreen.html",
        controller: 'splashScreenCtrl as splashScreen'
      })
      .state('register', {
        url: '/register',
        templateUrl: "templates/register.html",
        controller: 'RegisterCtrl as register'
      })
      .state('main', {
        url: '/main',
        templateUrl: "templates/main.html",
        controller: 'MainCtrl as main'
      });

    $urlRouterProvider.otherwise('/splashscreen');

  });
