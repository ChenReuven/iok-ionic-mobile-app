angular.module('iok')
  .factory('contactDummyPhonesService', function ($cordovaContacts, $q) {

    function getAllContacts() {

      var d = $q.defer();
      var phones = [{
        addresses: null,
        birthday: null,
        categories: null,
        displayName: "Dima",
        emails: null,
        id: "1",
        ims: null,
        name: {
          formatted: "Dima Goltsman",
          givenName: "Dima"
        },
        nickname: null,
        note: "",
        organizations: null,
        phoneNumbers: "0524277551",
        photos: null,
        rawId: "1660",
        urls: null
      },{
        addresses: null,
        birthday: null,
        categories: null,
        displayName: "Chen",
        emails: null,
        id: "1",
        ims: null,
        name: {
          formatted: "Chen Reuven",
          givenName: "Chen"
        },
        nickname: null,
        note: "",
        organizations: null,
        phoneNumbers: "0524277552",
        photos: null,
        rawId: "1660",
        urls: null
      }, {
        addresses: null,
        birthday: null,
        categories: null,
        displayName: "Boris",
        emails: null,
        id: "2",
        ims: null,
        name: {
          formatted: "Boris L",
          givenName: "Boris"
        },
        nickname: null,
        note: "",
        organizations: null,
        phoneNumbers: "0545679384",
        photos: null,
        rawId: "2",
        urls: null
      },
        {
          addresses: null,
          birthday: null,
          categories: null,
          displayName: "Ron",
          emails: null,
          id: "3",
          ims: null,
          name: {
            formatted: "Ron L",
            givenName: "ron m"
          },
          nickname: null,
          note: "",
          organizations: null,
          phoneNumbers: "97252475376",
          photos: null,
          rawId: "3",
          urls: null
        }, {
          addresses: null,
          birthday: null,
          categories: null,
          displayName: "Chen",
          emails: null,
          id: "1",
          ims: null,
          name: {
            formatted: "Chen Reuven",
            givenName: "Chen"
          },
          nickname: null,
          note: "",
          organizations: null,
          phoneNumbers: "",
          photos: null,
          rawId: "1660",
          urls: null
        },
        {
          addresses: null,
          birthday: null,
          categories: null,
          displayName: "Chen",
          emails: null,
          id: "1",
          ims: null,
          name: {
            formatted: "Chen Reuven",
            givenName: "Chen"
          },
          nickname: null,
          note: "",
          organizations: null,
          phoneNumbers: null,
          photos: null,
          rawId: "1660",
          urls: null
        }
      ]

      d.resolve(phones);

      return d.promise;
    };


    return {
      find: getAllContacts
    }

  });
