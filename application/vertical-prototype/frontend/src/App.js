import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  BrowserRouter,
} from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
