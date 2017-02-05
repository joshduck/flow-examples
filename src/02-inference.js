/* @flow */

// Flow understands that logLower takes an object with a 'toLowerCase' method.
function takesString(a) {
  logLower(a);
}

function logLower(b) {
  console.log(b.toLowerCase());
}

takesString('Hello');
// takesString(2);



function takesStringOrNumber(a) {
  if (typeof a === 'number') {
    // Flow understands that type of a changes.
    a  = '' + a;
  } else if (typeof a !== 'string') {
    // Flow understands that this terminates execution.
    throw new Error('Bad value');
  }

  takesString(a);
}

takesStringOrNumber('Hello');
takesStringOrNumber(1);
takesStringOrNumber(false);
