

const defaultUser = {
  name: "oh",
  id: "David",
};

const contextReducer = (state = defaultUser, action) => {
  // console.log(`aciton:${action.type}, state: ${state}`);
  switch (action.type) {
    case 'CHANGENAME':
      return state + 1
    case 'CHANGEID':
      return state - 1
    default:
      return state
  }
}


