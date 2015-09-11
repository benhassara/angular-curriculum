var app = angular.module('contacts', []);

app.controller('AddContacts', ['$scope', addContactFn]);

function addContactFn($scope) {
  $scope.contacts = [
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
  $scope.newContact = {};

  $scope.saveContact = function(newContact) {
    $scope.contacts.push({
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone
    });
  };
}
