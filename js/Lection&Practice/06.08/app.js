"use strict";
module.exports = {
  greet: function() {
    return "hello";
  },
  reduceFunc: function(arr) {
    if (!Array.isArray(arr)) {
      return "Wrong data type";
    }
    return +arr.reduce((acc, el) => acc + el, 0).toFixed(1);
  }
};
