angular.module('contacts')

  .controller('AddContacts', AddContacts)
  .controller('DetailsCtrl', DetailsCtrl);

AddContacts.$inject = ['$scope', 'ContactListFact'];
DetailsCtrl.$inject = ['$scope', 'ContactListFact', '$routeParams'];

function AddContacts($scope, ContactListFact) {
  $scope.contacts = ContactListFact.contactList;
  $scope.newContact = {};

  $scope.saveContact = function(newContact) {
    ContactListFact.addContact({
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone
    });
    $scope.contacts = ContactListFact.contactList;
  };
}

function DetailsCtrl($scope, ContactListFact, $routeParams) {
  var index = $routeParams.index;
  $scope.contact = ContactListFact.contactList[index];
}
