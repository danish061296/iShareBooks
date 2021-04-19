const initState = () => ({
  username: '',
  password: '',
  email: '',
  isLoggedIn: false,
  searchField: '',
  searchType: '',
  imageBuffer: '',
  posts: [],
  viewBooks: [],
  cart: [],
  randomMsg: '',
});

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

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
    case 'SET_VIEW_BOOK':
      console.log(action);
      return {
        ...state,
        viewBooks: [...state.viewBooks, action.book],
      };
    case 'ADD_TO_CART':
      console.log(action);
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      console.log(action);
      // coping the previous items into new array
      let newCart = [...state.cart];

      // check if the id is there
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index < 0) {
        console.warn(`Cant remove the product with id: ${action.id} `);
        // if item exists, remove it from the cart
        newCart.splice(index, 1);
      } else {
        // if item exists, remove it from the cart
        newCart.splice(index, 1);
      }
      return { ...state, cart: newCart };
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
