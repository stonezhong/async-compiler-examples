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

foo().then(function(result) {
  console.info(result);
});


