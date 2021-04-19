export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  username,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  password,
});
export const setuserId= (id) => ({
  type: 'SET_USERID',
  id,
});

export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  email,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: 'SET_LOGGED_IN',
  isLoggedIn,
});

export const setSearchField = (searchField) => ({
  type: 'SET_SEARCH_FIELD',
  searchField,
});
export const setSearchType = (searchType) => ({
  type: 'SET_SEARCH_TYPE',
  searchType,
});

export const setImageBuffer = (imageBuffer) => ({
  type: 'SET_IMAGE_BUFFER',
  imageBuffer,
});

export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts,
});
export const setrandomMsg = (randomMsg) => ({
  type: 'SET_RANDOM_MSG',
  randomMsg,
});

export const setCartItem = (item) => ({
  type: 'ADD_TO_CART',
  item,
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  id,
});

export const setViewBook = (book) => ({
  type: 'SET_VIEW_BOOK',
  book,
});
