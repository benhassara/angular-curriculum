angular.module('contacts')

  .factory('ContactListFact', ContactListFact);

ContactListFact.$inject = ['$http'];

function ContactListFact($http) {
  var ContactList = {};

  ContactList.contactList = [
    {
      name: 'Tony Stark',
      email: 'tony@starkindustries.com',
      phone: '123-456-7890',
      gif: 'http://giphy.com/embed/AbYxDs20DECQw'
    },
    {
      name: 'Bill Nye',
      email: 'b.nye@science.com',
      phone: '314-159-2653',
      gif: 'http://giphy.com/embed/RVqLSBbkI8sKI'
    },
    {
      name: 'Luke Skywalker',
      email: 'master_skywalker@jedi.org',
      phone: '111-111-1111',
      gif: 'http://giphy.com/embed/oSa03SaCKYFUc'
    }
  ];

  ContactList.addContact = function(obj) {
    var query = obj.name.trim().replace(' ', '+'); // format as URL param
    var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + query;
    var contactGif = '';

    // search Giphy for a gif matching the contacts name
    $http.get(url)
      .then(function(response) {
        if (response.data.data[0].embed_url) {
          contactGif = response.data.data[0].embed_url;
          obj.gif = contactGif;
        }
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
