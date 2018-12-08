import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { createStore } from 'redux';
import logo from './logo.svg';

import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';


const hello = () => ('hello');
const store = createStore(hello);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
