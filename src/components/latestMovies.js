import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Movie from './movie';
import { Icon, InlineIcon } from '@iconify/react';
import triangleStroked11 from '@iconify/icons-maki/triangle-stroked-11';

class LatestMovies extends React.Component {
  state = {
    movies: [
      {
        movieName: 'Parasite',
        movieImg: 'http://joseignaciofilmfestival.com/wp-content/uploads/2019/12/parasite_Mesa-de-trabajo-1-copia.jpg',
        movieDesc: 'South Korean black comedy thriller',
        moviePrice: '$ 10.00',
        movieDate: '15-10-2020'
      },
      {
        movieName: 'Joker',
        movieImg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-poster-1567070106.jpg',
        movieDesc: 'American psychological thriller',
        moviePrice: '$ 10.00',
        movieDate: '15-10-2020'
      },
      {
        movieName: 'It',
        movieImg: 'http://es.web.img3.acsta.net/r_1280_720/pictures/19/07/30/09/09/0763744.jpg',
        movieDesc: 'American supernatural horror film',
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
            movie => <Movie name={movie.movieName} key={movie.movieName} image={movie.movieImg} desc={movie.movieDesc}/>
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