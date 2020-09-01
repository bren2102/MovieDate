import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import pinterestCircle from '@iconify/icons-jam/pinterest-circle';
import facebookCircle from '@iconify/icons-jam/facebook-circle';
import twitterCircle from '@iconify/icons-jam/twitter-circle';

const Movie = (props) => {
  const {name, image, desc} = props;

  return (
    <div id="movie">
      <div id="movieImg">
        <img src={image}></img>
      </div>
      <h3>{name}</h3>
      <span>{desc}</span>
      <div id="social">
        <Icon icon={facebookCircle} style={{ color: '#f1f1f1', fontSize: '30px' }} />
        <Icon icon={twitterCircle} style={{ color: '#f1f1f1', fontSize: '30px' }} />
        <Icon icon={pinterestCircle} style={{ color: '#f1f1f1', fontSize: '30px' }} />
      </div>
    </div>
  )
  
}

export default withRouter(Movie);