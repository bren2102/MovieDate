import React from 'react';
import Proptypes from 'prop-types';
import { Icon, InlineIcon } from '@iconify/react';
import { withRouter, Link } from 'react-router-dom';
import logoTwitter from '@iconify/icons-carbon/logo-twitter';
import scFacebook from '@iconify/icons-ei/sc-facebook';
import vimeoV from '@iconify/icons-la/vimeo-v';
import pinterestP from '@iconify/icons-cib/pinterest-p';

class SideBar extends React.Component {

  render() {
    return(
      <nav>
        <h1>Vmovie</h1>
        <ul>
          <Link to={'/MovieList'}>
            <li>MOVIES</li>
          </Link>
          <li>LOCATIONS</li>
          <li>SHOP</li>
          <li>TICKETS</li>
        </ul>
        <div id="icon">
          <Icon icon={logoTwitter} style={{ color: '#484848', fontSize: '30px' }} />
          <Icon icon={scFacebook} style={{ color: '#484848', fontSize: '30px' }} />
        </div>
      </nav>
    );
  }
}

export default withRouter(SideBar);