var types = require('runtime-types');
var validate = require('runtime-types').validate
var path  = require('path');

export type User = {
  name: string,
  age: number,
}


var Types = types.readFile(path.join(__dirname, './05-runtime.js'));
var validators = validate.createAll({}, Types);

console.log(validators.User(1)); // Error
console.log(validators.User({ name: 99, age: 99 })); // Error
console.log(validators.User({ name: 'Josh', age: 99 })); // OK
