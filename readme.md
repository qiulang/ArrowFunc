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



想不到最后居然还是因为debugjs ， 从 2019开始我就被它搞，都4年了 😂

1. [@babel/preset-env fails to polyfill IE11 for debug module, version 4](https://github.com/babel/babel/issues/10707)  [qiulang](https://github.com/qiulang) opened this issue on Nov 14, 2019
2. [Failing to load the file in IE ](https://github.com/socketio/socket.io-client/issues/1328) **[qiulang](https://github.com/qiulang)** commented [on Jun 22, 2021](https://github.com/socketio/socket.io-client/issues/1328#issuecomment-865863817) give up then !
3. 现在 。。。 