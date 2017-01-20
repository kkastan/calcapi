'use strict';

var svc = require('../services/operations');

exports.addNumbers = function(a, b) {
  var value = svc.add(a, b);

  var result = {
    header: {
      operation: "ADD",
    },
    data: value,
  }

  return result;
}

exports.subtractNumbers = function(a, b) {
  var c = -1 * parseInt(b);
  var result = this.addNumbers(a, c);
  result.header.operation = "SUBTRACT";
  return result;
}
