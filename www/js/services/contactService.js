angular.module('iok')
  .factory('contactService', ['$q', /*'$cordovaContacts',*/'contactDummyPhonesService', function ($q, $cordovaContacts) {

    var options = {
      hasPhoneNumber: true
    };

    function getContactsWithPhones(contacts) {
      return contacts.filter(function (contact) {
        return contact.phoneNumbers && contact.phoneNumbers != "" && contact.phoneNumbers.length > 0;
      })
    }

    function getAllContacts() {

      return $cordovaContacts.find(options).then(function (allContacts) {
        console.log("Contacts Success= ", allContacts);
        return getContactsWithPhones(allContacts);
      }, function (err) {
        console.error('Contact Error ', err);
        d.reject(err);
      });

    }

    function getPhonesAreaCode() {
      return ['972', '352', '444', '827', '542', '234', '554', '563', '124', '545', '445'];
    }

    return {
      getAllContacts: getAllContacts,
      getPhonesAreaCode: getPhonesAreaCode
    }

  }]);
