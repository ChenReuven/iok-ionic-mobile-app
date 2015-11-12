function MainCtrl(statusService, contactService) {

  var vm = this;

  contactService.getAllContacts()
    .then(function (contacts) {

      vm.contacts = contacts;

    }, function (err) {

    });


  console.log('Main');


}

MainCtrl.$inject = ['statusService', 'contactService'];

angular.module('iok').controller('MainCtrl', MainCtrl);
