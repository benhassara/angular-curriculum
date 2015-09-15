angular.module('redditClone', ['angularMoment'])

.factory('posts', function() {
  var factory = {};
  // hold all posts
  var posts = [
    new Post({
      title: 'Look at this Title',
      author: 'ClintonFan4Lyfe',
      img: 'http://freepatriotpost.com/wp-content/uploads/2015/05/148631-bill-clinton-and-ice-cream.jpg',
      desc: 'This is a picture of Big Willy Style with some delicious ice cream.',
      date: 'September 10, 2015 12:10:30'
    }),
    new Post({
      title: 'Another Goddamn Title',
      author: 'Carl',
      img: 'http://www.tibetanreview.net/wp-content/uploads/2014/09/Dalai-Lama-pic-1.jpg',
      desc: 'Look at him. What an adorable old dude.',
      date: 'September 1, 2015 14:45:20'
    }),
    new Post({
      title: 'Come on in to Titles, Titles, Titles',
      author: 'HashtagMemesCatsBacon',
      img: 'http://i2.kym-cdn.com/photos/images/facebook/000/821/617/564.jpg',
      desc: 'Florida Man is at it again!',
      date: 'September 14, 2015 10:12:52'
    })
  ];

  // current user, for commenting
  factory.user = '';

  // Add a post to the page
  factory.addPost = function(input) {
    posts.push(new Post(input));
  };

  // Get all posts
  factory.getAllPosts = function() {
    return posts;
  };

  // Get one post by Date
  factory.getPost = function(date) {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].date === date)
        return {index: i, post: posts[i]};
    }
  };

  // Update a post
  // obj includes the date for the post, and the changes to make
  factory.updatePost = function(obj) {
    var storedIndex = this.getPost(obj.date).index;
    for (var key in obj) {
      if (key !== 'date')
      posts[storedIndex].key = obj.key;
    }
  };

  return factory;
})

.factory('navSearch', function(){
  var factory = {};
  // hold the nav bar search string
  factory.query = "";

  return factory;
})

.controller('NavBar', ['$scope', 'navSearch', function($scope, navSearch) {
  // expose for filtering posts
  $scope.navSearch = navSearch;
}])

// To handle the post submission form
.controller('SubmitPost', ['$scope', 'posts', function($scope, posts) {
  $scope.submitPost = function() {
    posts.addPost({
      title: $scope.title,
      author: $scope.author,
      img: $scope.img,
      desc: $scope.desc
    });
    $('#addPostModal input').val('');
    $('#addPostModal textarea').val('');
    $('#addPostModal').modal('hide');
  };
}])

// control the collection of posts
.controller('AllPosts', ['$scope', 'posts', 'navSearch', function($scope, posts, navSearch) {
  $scope.navSearch = navSearch;
  $scope.posts = posts.getAllPosts();
}])

.controller('SinglePost', ['$scope', 'posts', function($scope, posts) {

  $scope.upvote = function() {
    $scope.post.votes++;
    posts.updatePost({date: $scope.post.date, votes: $scope.post.votes});
  };

  $scope.downvote = function() {
    $scope.post.votes--;
    posts.updatePost({date: $scope.post.date, votes: $scope.post.votes});
  };

  $scope.addComment = function() {
    $scope.post.comments.push({
      user: $scope.posts.user,
      text: $scope.newCommentText,
      timestamp: new Date()
    });
    $scope.newCommentText = '';
    posts.updatePost({date: $scope.post.date, comments: $scope.post.comments});
  };
}]);

// Post object - represents each post on the page
// initialized by the data from the add post form
function Post(obj) {
  // from the form
  this.title = obj.title;
  this.author = obj.author;
  this.imgUrl = obj.img;
  this.desc = obj.desc;
  // additional functionality
  this.comments = [];
  this.votes = 0;
  this.date = new Date(obj.date) || new Date();
}
