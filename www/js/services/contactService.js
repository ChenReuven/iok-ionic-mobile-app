angular.module('iok')
  .factory('contactService', ['$q', /*'$cordovaContacts',*/'contactDummyPhonesService', function ($q, $cordovaContacts) {

    function getContactsWithPhones(contacts) {
      return contacts.filter(function (contact) {
        return contact.phoneNumbers && contact.phoneNumbers != "" && contact.phoneNumbers.length > 0;
      })
    }

    function getAllContacts() {
      var d = $q.defer();
      var options = {
        hasPhoneNumber: true
      };

      $cordovaContacts.find(options).then(function (allContacts) {
        var contacts = getContactsWithPhones(allContacts);
        console.log("Contacts Success= ", contacts);
        d.resolve(contacts);
      }, function (err) {
        console.error('Contact Error ', err);
        d.reject(err);
      });

      return d.promise;
    };


    return {
      getAllContacts: getAllContacts
    }

  }]);
