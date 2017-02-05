/* @flow */
function takesNumber(a: number) {
  console.log(a);
}

takesNumber(1);
// takesNumber(null);
// takesNumber('Hello');




function takesObject(a: { foo: number }) {
  console.log(a);
}

takesObject({foo: 1});
// takesObject({});




function takesLiteral(a: 1 | 'hello' | 'goodbye') {
  console.log(a);
}

takesLiteral(1);
takesLiteral('hello');
// takesLiteral('hola');
