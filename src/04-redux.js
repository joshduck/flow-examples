/* @flow */

// An action is an object with type of 'create' or 'rename'.
type Actions =
  { type: 'age', years: number } |
  { type: 'rename', name: string };

// State is an object with string keys pointing to an object.
type State = {
  name: string,
  age: number
};

function user(state: State, action: Actions): State {
  switch (action.type) {
    case 'age':
      // Flow ensures we don't access action props for the wrong branch.
      // For example action.name would error because we said name exists only
      // when the type is rename.

      //action.name;

      return {
        ...state,
        age: state.age + action.years
      };
    case 'rename':
      // Flow ensures we don't return an invalid value.

      // return { name: action.name };

      return {
        ...state,
        name: action.name
      };
    default:
      // Flow forces us to handle the default case (but it shouldn't!)
      return state;
  }
}

// Flow will ensure we don't call with an invalid action.
// user({ name: 'Josh', age: 99 }, { action: 'hello' });
// user({}, { action: 'rename', name: 'Josh' });
