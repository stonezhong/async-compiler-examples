/**
 * This is an example on how you can use async compiler to deal with dropbox API
 * node -harmony node_modules/async-compiler/compile.js --input dropbox-test.js --output dropbox-test-compiled.js && node -harmony dropbox-test-compiled.js
 */
var AsyncTool = require('async-compiler-runtime');

var Dropbox = require("dropbox");
var client = new Dropbox.Client({ key: "<YourAppKey>", secret: "<YourAppSecret>" });

client.authDriver(new Dropbox.AuthDriver.NodeServer(8191));

/* wrap authenticate that returns promise */
function authenticate(client) {
  return new Promise(function(resolve, reject) {
    client.authenticate(function(error, client) {
      if (error) {
        reject(error);
        return ;
      }

      resolve();
      return ;
    });
  });
}

function readFile(client, filename) {
  return new Promise(function(resolve, reject) {
    client.readFile(filename,  function(error, data) {
      if (error) {
        reject(error);
        return ;
      }
      resolve(data);
      return ;
    });
  });
}

/** @async **/
function dropBoxTest() {
  authenticate(client);
  var data = readFile(client, 'readme.txt');
  console.log(data);
}

dropBoxTest().then(function() {
  console.log("Test is done!");
});
