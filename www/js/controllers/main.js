function MainCtrl($scope, statusService, contactService, geoLocationService, StatusControlEvents, storageService) {

  var vm = this;
  var PHONE_GEOLOCATION_LAT_KEY = 'user.geolocation-lang';
  var PHONE_GEOLOCATION_LONG_KEY = 'user.geolocation-long';

  geoLocationService.getCurrentLocation()
    .then(function (position) {
      storageService.set(PHONE_GEOLOCATION_LAT_KEY, position.coords.latitude);
      storageService.set(PHONE_GEOLOCATION_LONG_KEY, position.coords.longitude);
    });

  this.friendsListInForeground = false;

  contactService.getAllContacts()
    .then(function (contacts) {

      vm.contacts = contacts;

    }, function (err) {

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

  console.log('Main');

}

MainCtrl.$inject = ['$scope', 'statusService', 'contactService', 'geoLocationService', 'StatusControlEvents', 'storageService'];

angular.module('iok').controller('MainCtrl', MainCtrl);
