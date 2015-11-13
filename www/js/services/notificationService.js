function NotificationService($rootScope) {

  this.handleNotifications = function () {

    var push = new Ionic.Push({
      "debug": true,
      "onNotification": function (notification) {
        var payload = notification.payload;
        console.log(notification, payload);

        $rootScope.$broadcast('iok-status-notification', payload);

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

    /*
    var user = Ionic.User.current();

    var callback = function (pushToken) {
      console.log('Registered token:', pushToken.token);
      user.addPushToken(pushToken);
      user.save(); // you NEED to call a save after you add the token
    }

    push.register(callback);
     */

    // kick off the platform web client
     Ionic.io();

     // this will give you a fresh user or the previously saved 'current user'
     var user = Ionic.User.current();

     // if the user doesn't have an id, you'll need to give it one.
     if (!user.id) {
     user.id = Ionic.User.anonymousId();
     // user.id = 'your-custom-user-id';
     }

     //persist the user
    //user.save();

    // Push Notification

    push.register(function (token) {
     console.log("Device token:",token.token);
    });

  }

}

angular.module('iok').service('notificationService', NotificationService);
