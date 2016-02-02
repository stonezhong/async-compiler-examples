var AsyncTool = require('async-compiler-runtime');

function add(x, y) {
  return Promise.resolve(x + y);
}

function mul(x, y) {
  return Promise.resolve(x * y);
}

/** @async **/
function foo() {
  return mul(add(3, 4), add(5, 6));
}

/** @async **/
function bar() {
  var sum = 0;
  for (var i = 0; i <= 10; i ++) {
    sum = add(sum, i);
  }
  return sum;
}

foo().then(function(result) {
  console.info(result);
});

bar().then(function(result) {
  console.info(result);
});
