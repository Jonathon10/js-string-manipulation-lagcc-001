
'use strict';

var decoder = function(encoded){

  return encoded
    .split("")
    .reverse()
    .join("")
    .replace(/\$/g, " ")
    .replace(/3/g, "e")
    .replace(/8/g, "a")
    .replace(/5/g, "s");
};

module.exports = decoder;

