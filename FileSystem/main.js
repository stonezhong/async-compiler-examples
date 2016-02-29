var AsyncTool = require('async-compiler-runtime');

var FS = require('q-io/fs');
const fs = require('fs');

/*
 * Simply wrap readdir, q-io/fs didn't wrap the readdir API
 */
function readdir(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, function(err, data) {
      if (err) {
        reject(err);
        return ;
      }
      resolve(data);
    });
  });
}

/*
 * Now both readdir and FS.isDirectory returns Promise, you can call them
 * just as if they are synchronous function in @aysnc functions
 */
/** @async **/ function printDirs() {
  var children = readdir('.');
  for (var i in children) {
    var child = children[i];
    console.log((FS.isDirectory(child)?"<DIR>":"     ") + '  ' + child);
  }
}

printDirs().then(function() {
  console.log('done');
}, function(err) {
  console.log(err);
});
