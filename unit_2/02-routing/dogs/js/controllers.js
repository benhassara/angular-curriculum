angular.module('routingApp')

  .controller('HomeController', function($scope) {
    $scope.message = 'Look at this flipping cute dog! Click on that button down there to see more dogs.';
  })

  .controller('DogsController', function($scope) {
    $scope.message = "You asked for more dogs, so here's some more dogs!";

    $scope.images = [
      'http://globe-views.com/dcim/dreams/dog/dog-04.jpg',
      'http://stylonica.com/wp-content/uploads/2014/03/1600DOG_11019.jpg',
      'http://dognotebook.first.netdna-cdn.com/wp-content/uploads/2014/02/AmericanPitBullTerrier.jpg',
      'http://content.randomenthusiasm.com/MQtsciO7q.jpeg'
    ];
  });
