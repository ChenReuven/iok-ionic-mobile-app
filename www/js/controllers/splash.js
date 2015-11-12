function SplashCtrl(statusService, storageService, $state, contactService) {

  var vm = this;
  var PHONE_STORAGE_KEY = 'user.phone-num';
  var DEFAULT_AREA_CODE = '972';

  vm.phonesAreaCode = contactService.getPhonesAreaCode();
  vm.phoneAreaCode = DEFAULT_AREA_CODE;

  vm.submitNumber = function () {
    if (vm.phoneNumber && vm.phoneNumber !== '') {
      var fullUserNumber = vm.phoneAreaCode + vm.phoneNumber;
      storageService.set(PHONE_STORAGE_KEY, fullUserNumber);
      statusService.sendStatus();

      $state.go('main');

    }

  }

}

SplashCtrl.$inject = ['statusService', 'storageService', '$state', 'contactService'];

angular.module('iok').controller('SplashCtrl', SplashCtrl);
