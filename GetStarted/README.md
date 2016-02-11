# Async Compiler Examples

For details on async compiler, see https://github.com/stonezhong/async-compiler

To compiler your js code, run
```
node -harmony node_modules/async-compiler/compile.js --input abc.js --output def.js
```
It will take abc.js as input file, compile it and produce def.js

to run it, you need to:
```
node -harmony def.js
```
