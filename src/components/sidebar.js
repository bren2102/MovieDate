import React from 'react';
import Proptypes from 'prop-types';
import { Icon, InlineIcon } from '@iconify/react';
import { withRouter, Link } from 'react-router-dom';
import logoTwitter from '@iconify/icons-carbon/logo-twitter';
import scFacebook from '@iconify/icons-ei/sc-facebook';
import googlePlus from '@iconify/icons-vaadin/google-plus';
import scVimeo from '@iconify/icons-ei/sc-vimeo';
import bxlPinterestAlt from '@iconify/icons-bx/bxl-pinterest-alt';

class SideBar extends React.Component {

  render() {
    return(
      <nav>
        <h1>Vmovie</h1>
        <ul>
          <Link to={'/Movies'}>
            <li>MOVIES</li>
          </Link>
          <li>LOCATIONS</li>
          <li>SNACKS</li>
          <li>TICKETS</li>
        </ul>
        <div>
          <div id="icon">
            <Icon icon={logoTwitter} style={{ color: '#484848', fontSize: '25px', }} />
            <Icon icon={scFacebook} style={{ color: '#484848', fontSize: '25px', }} />
            <Icon icon={googlePlus} style={{ color: '#484848', fontSize: '20px', }} />
            <Icon icon={scVimeo} style={{ color: '#484848', fontSize: '25px', }} />
            <Icon icon={bxlPinterestAlt} style={{ color: '#484848', fontSize: '25px', }} />
          </div>
          <span id="copyright">&copy; 2020 Rights reserved</span>
        </div>
      </nav>
    );
  }
}

export default withRouter(SideBar);