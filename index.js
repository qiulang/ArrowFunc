//const debug = require('debug')
import debug from 'debug'
let log = debug('app:log')

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

let a = { name:"qiu", age: 18 }
let b = { ...a, gender: "f" }

log(sumWithInitial);
log(JSON.stringify(b));
