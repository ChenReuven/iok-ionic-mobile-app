angular.module('iok').directive('contactList', ['$filter', function ($filter) {
  return {
    restrict: 'AE',
    templateUrl: 'templates/listTemplate.html',
    scope: {
      items: '='
    },
    link: function (scope, iElement, iAttrs) {

      var onAskContactStatus = function (item) {
        var formatPhoneNumber = $filter('phoneFormatter')(item.phoneNumbers);
        // TODO: need to add service for apply status of the contact
      }
    }
  }
}]);
