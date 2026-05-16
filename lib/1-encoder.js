
'use strict';

var encoder = function(phrase){

  return phrase
    .replace(/e/g, "3")
    .replace(/a/g, "8")
    .replace(/s/g, "5")
    .replace(/ /g, "$")
    .split("")
    .reverse()
    .join("");
};

module.exports = encoder;
