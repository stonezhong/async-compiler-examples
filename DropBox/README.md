# Async Compiler make DropBox file access easier

This example shows how to authenticate and read file from dropbox. As you can see, I first wrap authenticate and readFile so they return promise.

And then dropBoxTest can call authenticate and readFile as if they where synchronous, the compiler will deal with the asynchronicity, however, your code don't need to have nested then() which looks ugly.

## Before you run the test, make sure you have node 5.5 installed
Goto https://nodejs.org/en/download/stable/ to download node 5.5

## preparation
* You need to create an application in dropbox, replace <YourAppKey> and <YourAppSecret>
* You need to config your app's callback to "http://localhost:8912/oauth_callback" for the test
* Save a file named "readme.txt" in your dropbox home directory.


## Run the test
```
npm install
node -harmony node_modules/async-compiler/compile.js --input dropbox-test.js --output dropbox-test-compiled.js
node -harmony dropbox-test-compiled.js
```
