## The reason babel failed to transpile arrow function for IE



### findings 

With the help from [Failed to transpile arrow functions even I saw "transform-arrow-functions { ie } " from log and I have not exclude /node_modules/](https://github.com/babel/babel/issues/16145) I was able to reproduce this problem and the following are what I  found:

1.  [debugjs](https://github.com/debug-js/debug) causes the problem.
2. I first used `.babelrc` then babel failed to transpile `debugjs` after I changed it to `babel.config.json` babel can transpile `debugjs` but why ?



### reproduce procedure

1. use  `.bablerc` instead of `babel.config.json`, run `npm run bundle`
2. run `ag --js -c "=>{" ./dist/` or  `grep -c "=>{" ./dist/main.js`  to check



### conclusion

1. use ``babel.config.json`` for babel 7, refer to https://babeljs.io/docs/config-files#6x-vs-7x-babelrc-loading
2. `exclude` setting in webpack.config.js:
   1.  Without it, can transpile the code but browsers fail to run
   2. with it, IE fails to run
   3. So to make IE and all other evergreen browsers to run, use `exclude: /node_modules\/(?!(debug)\/).*/,`