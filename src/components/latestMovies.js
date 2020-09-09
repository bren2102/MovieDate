/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import triangleStroked11 from '@iconify/icons-maki/triangle-stroked-11';
import { selectedPage } from '../actions/index';
import Movie from './movie';

class LatestMovies extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    const moviesUrl = '/api/movies';
    axios.get(moviesUrl)
      .then(data => {
        this.setState({
          movies: data.data,
        });
      });
  }

  render() {
    const { movies } = this.state;
    const { setselectedPage } = this.props;
    setselectedPage('movies');
    return (
      <div className="movieMenu">
        <h1>LATEST MOVIES</h1>
        <span>Please select a movie</span>
        <div id="movieSet">
          <button type="button" id="leftSide">
            <Icon
              icon={triangleStroked11}
              style={{ color: 'white', fontSize: '20px' }}
              hFlip
              vFlip
              rotate="90deg"
            />
          </button>
          {movies.map(
            movie => (
              <Movie
                name={movie.name}
                key={movie.name}
                image={movie.image}
                desc={movie.description}
              />
            ),
          )}
          <button type="button" id="rightSide">
            <Icon icon={triangleStroked11} style={{ color: 'white', fontSize: '20px' }} vFlip rotate="270deg" />
          </button>
        </div>

      </div>
    );
  }
}

LatestMovies.propTypes = {
  setselectedPage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setselectedPage: currentPage => dispatch(selectedPage(currentPage)),
});

export default connect(null, mapDispatchToProps)(withRouter(LatestMovies));
