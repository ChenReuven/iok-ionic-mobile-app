angular.module('iok').directive('contactList', ['$filter', function ($filter) {
  return {
    restrict: 'AE',
    templateUrl: 'templates/listTemplate.html',
    scope: {
      items: '=',
      onContactClick: '&'
    },
    link: function (scope, iElement, iAttrs) {

    }
  }
}]);
