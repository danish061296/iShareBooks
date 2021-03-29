import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ProtectedRoute from './ProtectedRoute';
import ServiceBuy from './pages/ServiceBuy';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <ProtectedRoute
            path="/buyService"
            isLoggedIn={isLoggedIn}
            component={ServiceBuy}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
