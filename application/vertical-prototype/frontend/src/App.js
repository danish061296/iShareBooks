import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ProtectedRoute from './ProtectedRoute';
import About from './pages/About';
import Freebookmodal from './pages/Freebookmodal';
import Tradebookmodal from './pages/Tradebookmodal';
import Postbookmodal from './pages/Postbookmodal';

import ServiceBuy from './pages/ServiceBuy';
import Privacy from "./pages/Privacy"
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
          <Route path="/privacy" component={Privacy} />
              <Route path="/about" component={About} />
              <Route path="/f" component={Freebookmodal} />
              <Route path="/t" component={Tradebookmodal} />
              <Route path="/p" component={Postbookmodal} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
