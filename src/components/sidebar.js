/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Icon } from '@iconify/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import logoutIcon from '@iconify/icons-carbon/logout';
import menuIcon from '@iconify/icons-carbon/menu';
import closeIcon from '@iconify/icons-carbon/close';

class SideBar extends React.Component {
  handleSubmit = () => {
    localStorage.setItem('username', '');
  }

  handleMenu = () => {
    const navBar = document.getElementById('navBar');
    navBar.style.maxHeight = '100%';
    navBar.style.width = '100%';
    navBar.style.overflow = 'visible';
    navBar.style.position = "absolute";
    navBar.style.setProperty("height", "100%", "important");
    navBar.style.setProperty("width", "100%", "important");
    const close = document.getElementById('close');
    close.style.maxHeight = '100%';
    close.style.width = 'auto';
    close.style.top = '15px';
    close.style.position = 'absolute';
    close.style.right = '20px';
    const app = document.getElementById('app');
    app.style.setProperty("overflow", "hidden", "important");
    const ticketsLink = document.getElementById('ticketsLink');
    ticketsLink.addEventListener('click', () => {this.handleClose();})
    const moviesLink = document.getElementById('moviesLink');
    moviesLink.addEventListener('click', () => { this.handleClose(); })

  }

  handleClose = () => {
    const navBar = document.getElementById('navBar');
    // navBar.style.maxHeight = '100%';
    // navBar.style.width = 'auto';
    // navBar.style.overflow = 'hidden';
    // navBar.style.position = "unset";
    // navBar.style.setProperty("height", "100%", "important");
    navBar.removeAttribute("style")
    // navBar.style.setProperty("width", "100%", "important");
    const close = document.getElementById('close');
    close.removeAttribute("style");
    // close.style.maxHeight = '0';
    // close.style.width = 'auto';
    // close.style.top = '15px';
    // close.style.position = 'absolute';
    // close.style.right = '20px';
    const app = document.getElementById('app');
    app.style.setProperty("overflow", "unset", "important");
  }

  render() {
    const { currentPage } = this.props;
    return (
      <React.StrictMode>
        <button id="collapse" onClick={this.handleMenu}>
          <Icon icon={menuIcon} style={{ color: '#484848', fontSize: '25px', }} />
        </button>
        <nav id="navBar">
          <h1>Vmovie</h1>
          <button id="close" onClick={this.handleClose} style={{ overflow: 'hidden', maxHeight: 0, }} >
            <Icon icon={closeIcon} style={{ color: '#484848', fontSize: '28px', }} />
          </button>
          <ul id="linkList">
            <Link to="/Movies" id="moviesLink">
              <li style={{ backgroundColor: (currentPage === 'movies' ? '#97be10' : 'white') }}>MOVIES</li>
            </Link>
            <li>LOCATIONS</li>
            <li>SNACKS</li>
            <Link to="/Tickets" id="ticketsLink">
              <li style={{ backgroundColor: (currentPage === 'tickets' ? '#97be10' : 'white') }}>TICKETS</li>
            </Link>
          </ul>
          <div id="logout">
            <Link to="/">
              <button type="button" onClick={this.handleSubmit}>
                <Icon icon={logoutIcon} style={{ color: '#484848', fontSize: '20px', marginRight: '10px' }} hFlip />
                Logout
              </button>
            </Link>
            <span id="copyright">&copy; 2020 Rights Reserved</span>
          </div>
        </nav>
      </React.StrictMode>
    );
  }
}

SideBar.propTypes = {
  currentPage: PropTypes.string,
};

SideBar.defaultProps = {
  currentPage: '',
};

const mapStateToProps = state => ({
  currentPage: state.currentPage,
});

export default connect(mapStateToProps, null)(withRouter(SideBar));
