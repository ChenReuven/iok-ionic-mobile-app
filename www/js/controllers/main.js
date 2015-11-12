function MainCtrl(utilsService, statusService, contactService) {

  var vm = this;

  contactService.getAllContacts()
    .then(function (allContacts) {

      var contacts = utilsService.getContactsWithPhones(allContacts);
      console.log("Contacts = ", contacts);
      vm.contacts = contacts;

    }, function (err) {
      console.error(err);
      $scope.contactsError = err;
    });


  console.log('Main');


}

MainCtrl.$inject = ['utilsService', 'statusService', 'contactService'];

angular.module('iok').controller('MainCtrl', MainCtrl);
