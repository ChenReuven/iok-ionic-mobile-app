function MainCtrl(statusService) {
  statusService.sendStatus();
}

MainCtrl.$inject = ['statusService'];

angular.module('iok').controller('MainCtrl', MainCtrl);
