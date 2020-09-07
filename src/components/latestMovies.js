import React from 'react';
import { withRouter } from 'react-router-dom';
import Movie from './movie';
import axios from 'axios';
import { selectedPage } from '../actions/index';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import triangleStroked11 from '@iconify/icons-maki/triangle-stroked-11';

class LatestMovies extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    const moviesUrl = '/movies';
    axios.get(moviesUrl)
      .then(data => {
        this.setState({
          movies: data.data,
        })
      });
  }

  render() {
    const { movies } =  this.state;
    const { setselectedPage } = this.props;
    setselectedPage('movies');
    return(
      <div className="movieMenu">
        <h1>LATEST MOVIES</h1>
        <span>Please select a movie</span>
        <div id="movieSet">
          <button id="leftSide">
            <Icon icon={triangleStroked11} style={{ color: 'white', fontSize: '20px', }} hFlip={true} vFlip={true} rotate="90deg" />
          </button>
          {movies.map(
            movie => <Movie name={movie.name} key={movie.name} image={movie.image} desc={movie.description}/>
          )}
          <button id="rightSide">
            <Icon icon={triangleStroked11} style={{ color: 'white', fontSize: '20px', }} vFlip={true} rotate="270deg" />
          </button>
        </div>
          
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setselectedPage: currentPage => dispatch(selectedPage(currentPage)),
})

export default connect(null, mapDispatchToProps)(withRouter(LatestMovies));