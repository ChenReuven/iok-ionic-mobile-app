function MainCtrl(statusService) {
  console.log('Main');
}

MainCtrl.$inject = ['statusService'];

angular.module('iok').controller('MainCtrl', MainCtrl);
