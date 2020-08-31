import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Movies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieName: '',
      movieDesc: '',
      movieLitDesc: '',
      moviePrice: '',
      movieDate: ''
    }
  }
  render() {
    return(
      <div className="movieMenu">
        <h1>LATEST MOVIES</h1>
        <span>Please select a movie</span>
      </div>
    );
  }
}

export default withRouter(Movies)