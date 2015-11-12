function PersonalStatusControlsCtrl($scope, statusService, StatusControlEvents, $timeout) {
  this.message = '';

  var vm = this;
  var CLOSE_DELAY = 500;

  function showSuccessMessage() {
    vm.message = "IOK Updated!";
  }

  this.close = function () {
    $scope.$emit(StatusControlEvents.HIDE);
  };

  function delayedClose() {
    return $timeout(function () {
      vm.close();
    }, CLOSE_DELAY);
  }

  this.updateStatus = function () {
    return statusService.sendStatus()
      .then(showSuccessMessage)
      .then(delayedClose)
  }
}

PersonalStatusControlsCtrl.$inject = ['$scope', 'statusService', 'StatusControlEvents', '$timeout'];

function PersonalStatusControls() {
  return {
    restrict: 'E',
    controller: PersonalStatusControlsCtrl,
    controllerAs: 'pscCtrl',
    templateUrl: '../templates/personalStatusControl.html'
  }
}

angular.module('iok').directive('personalStatusControls', PersonalStatusControls);
