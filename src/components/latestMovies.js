import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Movie from './movie';
import { Icon, InlineIcon } from '@iconify/react';
import triangleStroked11 from '@iconify/icons-maki/triangle-stroked-11';

class LatestMovies extends React.Component {
  state = {
    movies: [
      {
        movieName: 'PARASITE',
        movieImg: 'http://joseignaciofilmfestival.com/wp-content/uploads/2019/12/parasite_Mesa-de-trabajo-1-copia.jpg',
        movieDesc: 'Movie Desc 1',
        movieLitDesc: 'Movie Lit Desc 1',
        moviePrice: '$ 10.00',
        movieDate: '15-10-2020'
      },
      {
        movieName: 'JOKER',
        movieImg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-poster-1567070106.jpg',
        movieDesc: 'Movie Desc 2',
        movieLitDesc: 'Movie Lit Desc 2',
        moviePrice: '$ 10.00',
        movieDate: '15-10-2020'
      },
      {
        movieName: 'IT',
        movieImg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-poster-1567070106.jpg',
        movieDesc: 'Movie Desc 3',
        movieLitDesc: 'Movie Lit Desc 3',
        moviePrice: '$ 10.00',
        movieDate: '15-10-2020'
      }
    ]
  }

  render() {
    return(
      <div className="movieMenu">
        <h1>LATEST MOVIES</h1>
        <span>Please select a movie</span>
        <div id="movieSet">
          <button id="leftSide">
            <Icon icon={triangleStroked11} style={{ color: 'white', fontSize: '20px' }} hFlip={true} vFlip={true} rotate="90deg" />
          </button>
          {this.state.movies.map(
            movie => <Movie name={movie.movieName} image={movie.movieImg} desc={movie.movieLitDesc}/>
          )}
          <button id="rightSide">
            <Icon icon={triangleStroked11} style={{ color: 'white', fontSize: '20px' }} vFlip={true} rotate="270deg" />
          </button>
        </div>
          
      </div>
    );
  }
}

export default withRouter(LatestMovies)