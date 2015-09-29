angular.module('railsMessaging')

  .controller('MessagingCtrl', MessagingCtrl);

MessagingCtrl.$inject = ['$scope', '$http'];

function MessagingCtrl($scope, $http) {

  $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    .then(function(response) {
      console.log(response.data);
      $scope.messages = response.data;
    });

  $scope.publishMessage = function() {
    console.log('in func');
    var payload = {
      message: {
        name: $scope.newPost.name,
        content: $scope.newPost.content
      }
    };

    $http.post('https://shielded-peak-6345.herokuapp.com/messages', payload)
      .then(function(response) {
        if (response.data.message === 'message succesfully added!') {
          $scope.messages.push({
            name: $scope.newPost.name,
            content: $scope.newPost.content
          });
          $scope.newPost = {};
        }
      });
  };
}
