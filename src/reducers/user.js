const INITIAL_STATE = {
  email: '',
};

const LOGIN = 'LOGIN';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.value };
  default:
    return state;
  }
}

export default user;
