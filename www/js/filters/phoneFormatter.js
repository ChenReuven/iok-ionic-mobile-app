angular.module('iok').filter('phoneFormatter', function () {
  return function (phone) {
    if (phone[0] === '0') {
      phone = '972' + phone.substr(1, phone.length);
    }

    return phone;
  }
});
