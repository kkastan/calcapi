'use strict';

exports.add = function(a, b) {
  return {
    value: parseInt(a) + parseInt(b),
    category: this.categorize(a, b),
  }
}

exports.categorize = function(a, b) {
  // some contrived "business" logic
  if(a % 2 == 0 && b % 2 == 0) {
    return "Blue";
  }
  return "Green";
}
