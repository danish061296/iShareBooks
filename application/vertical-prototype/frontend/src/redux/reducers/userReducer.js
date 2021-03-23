const initState = () => ({
  username: 'Danish ',
  password: '',
  isLoggedIn: false,
});

const userReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username,
      };
    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default userReducer;
