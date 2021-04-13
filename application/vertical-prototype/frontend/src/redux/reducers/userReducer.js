const initState = () => ({
  username: '',
  password: '',
  email: '',
  isLoggedIn: false,
  searchField: '',
  searchType: '',
  imageBuffer: '',
  posts: [],
  cart: [
    {
      id: '355363',
      title: 'Computer Book',
      author: 'John Doe',
      department: 'Computer Science',
      isbn: 123567894,
      condition: 'Used',
      price: 120.67,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFav9oFDbnaFFCMj-4ZalqZ7sAk0bCuwN-MIaO3_7Vlf3CgWccM0YGtJYiDRZM8Imx_FfB9gs&usqp=CAc',
    },
    {
      id: '732352',
      title: 'Literature Book',
      author: 'Alice Jane',
      department: 'Literature',
      isbn: 123535464,
      condition: 'New',
      price: 30.99,
      image:
        'https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg',
    },
    {
      id: '356234',
      title: 'English Book',
      author: 'Bob Michaels',
      department: 'English',
      isbn: 837748374,
      condition: 'Used',
      price: 27.01,
      image:
        'https://m.media-amazon.com/images/I/8110CWXpN5L._AC_UL640_FMwebp_QL65_.jpg',
    },
    {
      id: '732352',
      title: 'Literature Book',
      author: 'Alice Jane',
      department: 'Literature',
      isbn: 123535464,
      price: 30.99,
      image:
        'https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg',
    },
  ],
  randomMsg: '',
});
//Side Note: Type has to match the case
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
    case 'SET_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'SET_RANDOM_MSG':
      return {
        ...state,
        randomMsg: action.randomMsg,
      };

    default:
      return state;
  }
};

export default userReducer;
