function MainCtrl($scope, $q, statusService, contactService, geoLocationService, StatusControlEvents, storageService, GeoLocationConst) {

  var vm = this;
  vm.friendsListInForeground = false;
  var geoLoactionPromise = $q.defer(),
    geo,
    contactServicePromise;

  if (!isGeoLocationExist()) {
    geo = geoLocationService.getCurrentLocation();
  }
  else {
    geoLoactionPromise.resolve({
      coords: {
        latitude: storageService.get(GeoLocationConst.PHONE_GEOLOCATION_LAT_KEY),
        longitude: storageService.get(GeoLocationConst.PHONE_GEOLOCATION_LONG_KEY)
      }
    })
    geo = geoLoactionPromise.promise;
  }
  contactServicePromise = contactService.getAllContacts();

  $q.all([geo, contactServicePromise]).then(function (values) {
    var position = values[0];
    var contacts = values[1];
    storageService.set(GeoLocationConst.PHONE_GEOLOCATION_LAT_KEY, position.coords.latitude);
    storageService.set(GeoLocationConst.PHONE_GEOLOCATION_LONG_KEY, position.coords.longitude);

    vm.contacts = contacts;
  });


  $scope.$on(StatusControlEvents.HIDE, function () {
    vm.friendsListInForeground = true;
  });

  this.contactedHasUpdate = function (contact) {
    return contact.updatedAt > 0;
  };

  this.onContactSelected = function (contact) {
    return statusService.requestStatusOfContact(contact.phoneNumbers && contact.phoneNumbers > 0 ? contact.phoneNumbers[0] : '');
  };

  this.sendStatus = function () {
    statusService.sendStatus();
  };

  function isGeoLocationExist() {
    return storageService.get(GeoLocationConst.PHONE_GEOLOCATION_LAT_KEY) && storageService.get(GeoLocationConst.PHONE_GEOLOCATION_LONG_KEY);
  }

}

MainCtrl.$inject = ['$scope', '$q', 'statusService', 'contactService', 'geoLocationService', 'StatusControlEvents', 'storageService', 'GeoLocationConst'];

angular.module('iok').controller('MainCtrl', MainCtrl);
