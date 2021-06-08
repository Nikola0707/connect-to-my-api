const loginReducer = (
  state = {
    jwtToken: "",
  },
  action
) => {
  switch (action.type) {
    case "SAVE_LOGIN_TOKEN":
      const jwtToken = action.payload;
      console.log('Od Reducer' + ' ' + jwtToken)
      return {
        ...state,
        jwtToken,
      };
    default: {
      return state;
    }
  }
};

//Action
const loginAction = (jwtToken) => {
    return {
        type: 'SAVE_LOGIN_TOKEN',
        payload: jwtToken
    }
}

export {
    loginReducer,
    loginAction
}