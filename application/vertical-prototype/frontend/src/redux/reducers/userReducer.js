const initState = () => ({
  username: '',
  password: '',
  email: '',
  isLoggedIn: false,
});

const userReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };

    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };

    default:
      return state;
  }
};

export default userReducer;
