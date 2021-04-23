import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../redux/actions/userActions';

const Logout = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>You have been logged out</h1>
    </div>
  );
};

export default Logout;
