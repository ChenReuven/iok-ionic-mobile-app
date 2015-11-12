angular.module('iok').filter('phoneFormatter',function () {
  return function (phone) {
    if (phone[0] === '0') {
      phone = phone.substr(1, phone.length);
    }

    return '972' + phone;
  }
});
