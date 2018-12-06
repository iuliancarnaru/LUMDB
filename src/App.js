import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

import Movie from './Movie';


class App extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=6e63fd877ba081fbe093430a9f9065f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();

      this.setState(() => ({
        movies: movies.results
      }));
    } catch (e) {
      console.log(e); // eslint-disable-line no-console
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Route path="/test" component={Test} />

          {movies.map(movie => <Movie key={movie.id} movie={movie} />)}

        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => (
  <h1>Test</h1>
);
