angular.module('iok')
  .factory('contactService', ['$q', /*'$cordovaContacts',*/'contactDummyPhonesService', 'statusService','$filter', function ($q, $cordovaContacts, statusService, $filter) {
    var contactsList;
    var options = {
      hasPhoneNumber: true
    };

    function filterContactsWithPhones(contacts) {
      return contacts.filter(function (contact) {
        return contact.phoneNumbers && contact.phoneNumbers != "" && contact.phoneNumbers.length > 0;
      });
    }

    function updateContactsStatuses(allContacts) {
      contactsList = allContacts;
      var phoneFormatter = $filter('phoneFormatter');

      var contactPhoneNumbers = allContacts.map(function (contact) {
        return phoneFormatter(contact.phoneNumbers);
      });
      return statusService.getContactsStatusByPhoneNumbers(contactPhoneNumbers);
    }

    function updateContactsWithLatestStatus(contactsStatus) {
      contactsStatus = contactsStatus.data.phones || [];
      var phoneFormatter = $filter('phoneFormatter');
      contactsStatus.forEach(function (status) {
        var contactToUpdate = contactsList.filter(function (contact) {
          return phoneFormatter(contact.phoneNumbers) === status.phoneNumber;
        });

        if (contactToUpdate[0]) {
          contactToUpdate[0].updatedAt = status.updatedAt * 1000;
        }
      });

      return contactsList;
    }

    function getAllContacts() {
      return $cordovaContacts.find(options)
        .then(filterContactsWithPhones)
        .then(updateContactsStatuses)
        .then(updateContactsWithLatestStatus);
    }

    function getPhonesAreaCode() {
      return ['972', '352', '444', '827', '542', '234', '554', '563', '124', '545', '445'];
    }

    return {
      getAllContacts: getAllContacts,
      getPhonesAreaCode: getPhonesAreaCode
    }

  }]);
