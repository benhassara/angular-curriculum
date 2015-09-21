angular.module('customFilters')
  .filter('kebab', kebab)
  .filter('camel', camel)
  .filter('pigLatin', pigLatin)
  .filter('redact', redact);

/** converts a string from snake_case to kebab-case */
function kebab() {
  return function(input) {
    if (typeof input === 'string')
      return input.replace(/_/g, '-');
    return input;
  };
}

/** converts snake_case or kebab-case to camelCase */
function camel() {
  return function(input) {
    if (typeof input === 'string') {
      var arr = input.split(/-|_/g);
      if (arr.length > 1) {
        for (var i = 1; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join('');
      }
    }
    return input;
  };
}

/** converts a string to Pig Latin */
function pigLatin() {
  return function(input) {
    if (typeof input === 'string') {
      var words = input.split(' ');
      words.forEach(function(word, index) {
        words[index] = pigifyWord(word);
      });
      return words.join(' ');
    }
    return input;
  };
}

/** replaces input with REDACTED in given expression */
function redact() {
  return function(input, tokenToRedact) {
    var re = new RegExp(tokenToRedact, 'g');
    return input.replace(re, 'REDACTED');
  };
}

// helpers
/** converts a single word to Pig Latin */
function pigifyWord(word) {
  var splitUp;
  var lower = word.toLowerCase();
  if (/[^a|e|i|o|u]/.test(lower[0]) || lower.indexOf('y') === 0) {
    splitUp = lower.split(/([aeiou].*)/);
    return splitUp[1] + '-' + splitUp[0] + 'ay';
  }
  else if (/a|e|i|o|u/.test(lower[0])) {
    return lower + '-yay';
  }
  else if (lower.indexOf('y') !== -1) {
    if (lower.length === 2 && lower.indexOf('y') === 1) {
      return lower[1] + '-' + lower[0] + 'ay';
    }
    else if (/[^aeiou|\s]{2,}y/g.test(lower)) {
      splitUp = lower.split('y');
      return 'y' + lower[1] + '-' + lower[0] + 'ay';
    }
  }
}
