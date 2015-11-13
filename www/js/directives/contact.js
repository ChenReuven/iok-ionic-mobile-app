function ContactDirective($timeout) {
  return {
    restrict: 'E',
    scope: {
      model: '=',
      onClick: '&',
      withUpdates: '@'
    },
    templateUrl: 'templates/contact.html',
    link: function ($scope, $element) {
      $scope.onContactSelected = function () {
        $scope.onClick({contact: $scope.model});
        $scope.animate = true;

        $timeout(function () {
          $scope.animate = false;
        }, 500);
      }
    }
  }
}

angular.module('iok').directive('contact', ContactDirective);
