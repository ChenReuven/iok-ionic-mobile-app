// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('iok', ['ionic', 'ionic.service.core', 'ngCordova'])

  .run(function ($ionicPlatform) {
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

      /*  // kick off the platform web client
       Ionic.io();

       // this will give you a fresh user or the previously saved 'current user'
       var user = Ionic.User.current();

       // if the user doesn't have an id, you'll need to give it one.
       if (!user.id) {
       user.id = Ionic.User.anonymousId();
       // user.id = 'your-custom-user-id';
       }

       //persist the user
       user.save();*/

      // Push Notification
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
            "iconColor": "#f93c2b"
          }
        }
      });

      var user = Ionic.User.current();

      var callback = function (pushToken) {
        console.log('Registered token:', pushToken.token);
        user.addPushToken(pushToken);
        user.save(); // you NEED to call a save after you add the token
      }

      push.register(callback);
      /*push.register(function(token) {
       console.log("Device token:",token.token);
       });*/

    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller:'MainCtrl as main'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');

  });
