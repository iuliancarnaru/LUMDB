import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    description: 'Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie. '
  }, {
    id: 2,
    title: 'Spider Man'
  }, {
    id: 3,
    title: 'Fantasctic 4'
  }, {
    id: 4,
    title: 'Black Star'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {movies.map(movie => <Movie key={movie.id} movie={movie} description={movie.description}/>)}

      </div>
    );
  }
}


export default App;
