import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import Home from './route/Home';
import About from './route/About';
import Nav from './components/Nav/index';
import NotFound from './route/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route path="/" component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
