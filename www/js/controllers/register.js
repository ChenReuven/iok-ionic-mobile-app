function RegisterCtrl(statusService, storageService, $state, contactService, geoLocationService, PhonesConst) {

  var vm = this;
  vm.phonesAreaCode = contactService.getPhonesAreaCode();
  vm.phoneAreaCode = PhonesConst.DEFAULT_AREA_CODE;

  vm.submitNumber = function () {
    if (isValidPhoneNumber(vm.phoneNumber)) {
      var phoneNumberWithAreaCode = createPhoneNumber(vm.phoneAreaCode, vm.phoneNumber);
      persistUserPhoneNumberInLocalStorage(phoneNumberWithAreaCode);
      sendStatus();
    }
  }

  function createPhoneNumber(areaCode, phoneNumber) {
    return areaCode + phoneNumber;
  }

  function isValidPhoneNumber(phoneNumber) {
    return phoneNumber && phoneNumber !== '';
  }

  function persistUserPhoneNumberInLocalStorage(phoneNumber) {
    storageService.set(PhonesConst.USER_PHONE_NUMBER, phoneNumber);
  }

  function sendStatus() {
    statusService.sendStatus()
      .then(function () {
        $state.go('main');
      }, function (err) {
        console.error('Register--Error: Send Status: ' + error);
      });
  }

}

RegisterCtrl.$inject = ['statusService', 'storageService', '$state', 'contactService', 'geoLocationService', 'PhonesConst'];

angular.module('iok').controller('RegisterCtrl', RegisterCtrl);
