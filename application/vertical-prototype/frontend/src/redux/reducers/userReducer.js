const initState = () => ({
  username: '',
  password: '',
  email: '',
  isLoggedIn: false,
  searchField: '',
  searchType: '',
  imageBuffer: '',
  posts: [],
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
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.searchField,
      };
    case 'SET_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.searchType,
      };
    case 'SET_IMAGE_BUFFER':
      return {
        ...state,
        imageBuffer: action.imageBuffer,
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
};

export default userReducer;
