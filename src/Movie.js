import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {

    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            
        }),
        description: PropTypes.string
    }

    static defaultProps = {
        description: 'Description not available.'
    }

    render() {
        return(
            <div>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.description}</p>
          </div>
        );
    }
}

