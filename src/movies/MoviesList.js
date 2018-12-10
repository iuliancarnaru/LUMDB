import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from './actions';
import Movie from './Movie';


class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies, isLoaded } = this.props;
    if (!isLoaded) {
      getMovies();
    }
  }

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>Loading...</h1>;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>

    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;
