

const defaultUser = {
  id: "",
};

const contextReducer = (state = defaultUser, action) => {
  console.log(`aciton:${action.type}, state: ${state}`);
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'LOGOUT':
      return state.id = "";
    default:
      return state
  }
}


