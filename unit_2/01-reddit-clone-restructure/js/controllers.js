angular.module('redditClone')

  // nav bar functionality
  .controller('NavBar', ['$scope', 'navSearch', function($scope, navSearch) {
    // expose for filtering posts
    $scope.sortString = 'Votes';
    $scope.navSearch = navSearch;

    $scope.setSort = function(str) {
      $scope.navSearch.sort = str.toLowerCase();
      $scope.sortString = str;
    };

    $scope.setSortMode = function(bool) {
      $scope.navSearch.sortMode = bool;
    };
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
    $scope.postsFact = posts;
    $scope.posts = posts.getAllPosts();
  }])

  // functionality for a single post
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
