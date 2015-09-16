
/**
 * Represents a post.
 * @constructor
 * @param {object} obj - info from post submission form
 */
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
