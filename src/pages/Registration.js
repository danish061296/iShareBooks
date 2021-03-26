import React from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setIsLoggedIn } from '../redux/actions/userActions';
import Register from '../components/Registration';
import '../components/Registration.css';

const Registration = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const username = useSelector((state) => state.userReducer.username);

  return (
    <div>
      <Navigation />
      {/* Hi {username} */}
      <div className="signup__container">
        <Register />
      </div>
    </div>
  );
};

export default Registration;
