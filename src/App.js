import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import logo from './logo.svg';
import rootReducer from './rootReducer';
import Toggle from './Toggle';

import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';

const middleware = [logger];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
