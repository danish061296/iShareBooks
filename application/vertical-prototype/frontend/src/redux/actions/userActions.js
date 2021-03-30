export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  username,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  password,
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

export const setImageBuffer = (imageBuffer) => ({
  type: 'SET_IMAGE_BUFFER',
  imageBuffer,
});

export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts,
});
