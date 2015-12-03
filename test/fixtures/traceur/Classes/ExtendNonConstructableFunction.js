
assert.throw(function() {
  class C extends Math {}
}, 'Super expression must either be null or a function');

assert.throw(function() {
  function f() {}
  // prototype needs to be an Object or null.
  f.prototype = 42;
  class C extends f {}
}, 'Object prototype may only be an Object or null');
