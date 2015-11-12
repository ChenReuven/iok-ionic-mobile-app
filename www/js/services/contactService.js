angular.module('iok')
  .factory('contactService', [/*'$cordovaContacts',*/'contactDummyPhonesService', function ($cordovaContacts) {

    function getAllContacts() {
      var options = {
        hasPhoneNumber: true
      };

      return $cordovaContacts.find(options);
    };


    return {
      getAllContacts: getAllContacts
    }

  }]);
