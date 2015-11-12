function UtilsService() {

  return {
    getContactsWithPhones: function (contacts) {
      return contacts.filter(function (contact) {
        return contact.phoneNumbers && contact.phoneNumbers != "" && contact.phoneNumbers.length > 0;
      })
    }
  }
}

UtilsService.$inject = [];

angular.module('iok').service('utilsService', UtilsService);
