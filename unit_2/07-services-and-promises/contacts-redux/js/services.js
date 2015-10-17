angular.module('contacts')

  .factory('ContactListFact', ContactListFact);

ContactListFact.$inject = ['$http'];

function ContactListFact($http) {
  var ContactList = {};

  ContactList.contactList = [
    {
      name: 'Tony Stark',
      email: 'tony@starkindustries.com',
      phone: '123-456-7890'
    },
    {
      name: 'Billy Nye',
      email: 'b.nye@science.com',
      phone: '314-159-2653'
    },
    {
      name: 'Luke Skywalker',
      email: 'master_skywalker@jedi.org',
      phone: '111-111-1111'
    }
  ];

  ContactList.addContact = function(obj) {
    // ContactList.contactList.push(obj);
    var query = obj.name.trim().replace(' ', '+');
    var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + query;
    var contactGif = '';

    $http.get(url)
      .then(function(response) {
        if (response.data.data.embed_url) {
          contactGif = response.data.data.embed_url;
        }
      });

    if (contactGif) {obj.gif = contactGif;}
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
}
