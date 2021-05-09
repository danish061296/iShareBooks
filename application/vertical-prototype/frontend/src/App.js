import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ProtectedRoute from './ProtectedRoute';
import ServiceBuy from './pages/ServiceBuy';
import Profile from './pages/Profile';
import RatingMessage from './pages/RatingMessage';
import ViewListings from './pages/ViewListings';
import BuyBooks from './pages/BuyBooks';
import TradeBooks from './pages/TradeBooks';
import FreeBooks from './pages/FreeBooks';
import Privacy from './pages/Privacy';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ViewBook from './pages/ViewBook';
import TermsOfUse from './pages/TermsOfUse';
import Explore from './pages/ExploreNow';

import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
  setUserId,
  setUserRating,
  setUserPosts,
} from './redux/actions/userActions';

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    dispatch(setIsLoggedIn(localStorage.getItem('isloggedin')));
    dispatch(setUsername(localStorage.getItem('username')));
    dispatch(setUserId(localStorage.getItem('userid')));
    dispatch(setEmail(localStorage.getItem('email')));
    dispatch(setUserRating(localStorage.getItem('userrating')));
    dispatch(setUserPosts(localStorage.getItem('userposts')));
  }

  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/profile" component={Profile} />
          <Route path="/rating" component={RatingMessage} />
          <Route path="/viewlistings" component={ViewListings} />
          <Route path="/buybooks" component={BuyBooks} />
          <Route path="/tradebooks" component={TradeBooks} />
          <Route path="/freebooks" component={FreeBooks} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/viewbook" component={ViewBook} />
          <Route path="/profile" component={Profile} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/termsofuse" component={TermsOfUse} />
          <Route path="/explore" component={Explore} />
          <Route path="/explore" component={Explore} />

          <ProtectedRoute
            path="/buyService"
            isLoggedIn={isLoggedIn}
            component={ServiceBuy}
          />
          <ProtectedRoute
            path="/buyService"
            isLoggedIn={isLoggedIn}
            component={ServiceBuy}
          />
          {/* <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            component={Profile}
          /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
