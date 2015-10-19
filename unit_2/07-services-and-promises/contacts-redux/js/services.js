angular.module('contacts')

  .factory('ContactListFact', ContactListFact);

ContactListFact.$inject = ['$http'];

function ContactListFact($http) {
  var ContactList = {};
  var current = 3;

  ContactList.contactList = [
    {
      id: 0,
      name: 'Tony Stark',
      email: 'tony@starkindustries.com',
      phone: '123-456-7890',
      gif: 'https://media.giphy.com/media/AbYxDs20DECQw/giphy.gif'
    },
    {
      id: 1,
      name: 'Bill Nye',
      email: 'b.nye@science.com',
      phone: '314-159-2653',
      gif: 'https://media.giphy.com/media/RVqLSBbkI8sKI/giphy.gif'
    },
    {
      id: 2,
      name: 'Luke Skywalker',
      email: 'master_skywalker@jedi.org',
      phone: '111-111-1111',
      gif: 'https://media.giphy.com/media/oSa03SaCKYFUc/giphy.gif'
    }
  ];

  ContactList.addContact = function(obj) {
    var query = obj.name.trim().replace(' ', '+'); // format as URL param
    var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + query;
    var contactGif = '';

    // search Giphy for a gif matching the contacts name
    $http.get(url)
      .then(function(response) {
        if (response.data.data[0].images.original.url) {
          contactGif = response.data.data[0].images.original.url;
          obj.gif = contactGif;
        }
        obj.id = current;
        current++;
        ContactList.contactList.push(obj);
      });
  };

  ContactList.findContact = function(name) {
    return ContactList.contactList.filter(function(contact) {
      return contact.name === name;
    })[0];
  };

  ContactList.removeContact = function(index) {
    ContactList.contactList.splice(index, 1);
  };

  return ContactList;
}
