'use strict';

// Copy values from o2 to o1
function copy(o1, o2) {
  for (var key in o2) {
    o1[key] = o2[key]
  }

  return o1;
}

// mix(o1, o2) is the same as es6 {...o1, ...o2}
function mix(o1, o2) {
  return copy(copy({}, o1), o2);
}

module.exports = {
  mix: mix,
  copy: copy
}
