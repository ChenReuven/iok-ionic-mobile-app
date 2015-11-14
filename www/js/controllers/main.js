function MainCtrl($scope, $q, statusService, contactService, geoLocationService, StatusControlEvents, storageService, GeoLocationConst) {

  var vm = this;
  vm.friendsListInForeground = false;
  var geoLoactionPromise,
    contactServicePromise;

  if (!isGeoLocationExist()) {
    geoLoactionPromise = geoLocationService.getCurrentLocation();
  }
  contactSerivcePromise = contactService.getAllContacts();

  $q.all([geoLoactionPromise, contactServicePromise]).then(function (position, contacts) {
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
    return statusService.requestStatusOfContact(contact.phoneNumbers);
  };

  this.sendStatus = function () {
    statusService.sendStatus();
  };

  function isGeoLocationExist() {
    return storageService.get(GeoLocationConst.PHONE_GEOLOCATION_LAT_KEY) && storageService.set(GeoLocationConst.PHONE_GEOLOCATION_LONG_KEY);
  }

}

MainCtrl.$inject = ['$scope', '$q', 'statusService', 'contactService', 'geoLocationService', 'StatusControlEvents', 'storageService', 'GeoLocationConst'];

angular.module('iok').controller('MainCtrl', MainCtrl);
