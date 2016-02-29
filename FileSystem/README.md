# Async Compiler File System examples

For details on async compiler, see https://github.com/stonezhong/async-compiler

Package `q-io/fs` wraps many File System APIs, so they return `Promise` instead of using `callback`, which is good. Dealing with promise is still tedious. Imagine you need to traverse a directory, print all the child file/directory name, and prefix the directory name with "<DIR>", it is not going to be fun unless you use async functions. The following code shows how easy it is to do that with `/** @async **/` function:

```
/** @async **/ function printDirs() {
  var children = readdir('.');
  for (var i in children) {
    var child = children[i];
    console.log((FS.isDirectory(child)?"<DIR>":"     ") + '  ' + child);
  }
}
```

For details, see [main.js](./main.js). If you want to run the demo, just type `npm run demo` and have fun.
