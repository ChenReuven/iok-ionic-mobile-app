angular.module('iok')
  .factory('geoLocationService', ['$q', '$cordovaGeolocation', function ($q, $cordovaGeolocation) {

    function getCurrentLocation() {
      var d = $q.defer();

      var watchOptions = {
        timeout: 8000,
        enableHighAccuracy: false, // may cause errors if true
        maximumAge: 0
      };

      var watch = $cordovaGeolocation.watchPosition(watchOptions);
      watch.then(
        function (position) {
          var lat = position.coords.latitude
          var long = position.coords.longitude
          console.log('Success: ', position);

          watch.clearWatch();
          d.resolve(position);
        },
        function (err) {
          console.error('GPS Error = ', err);
          d.reject(err);
        },
        function (position) {
          console.log('Success Finally: ', position);
          d.resolve(position);
          watch.clearWatch();
        });

      return d.promise;

      // OR
      /* $cordovaGeolocation.clearWatch(watch)
       .then(function(result) {
       // success
       }, function (error) {
       // error
       });*/
    }

    return {
      getCurrentLocation: getCurrentLocation
    }

  }]);
