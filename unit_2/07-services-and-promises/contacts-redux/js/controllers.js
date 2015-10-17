angular.module('contacts')

  .controller('AddContacts', AddContacts);

AddContacts.$inject = ['$scope', 'ContactListFact'];

function AddContacts($scope, ContactListFact) {
  $scope.contacts = ContactListFact.contactList;
  $scope.newContact = {};

  $scope.saveContact = function(newContact) {
    $scope.contacts.push({
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone
    });
  };
}
