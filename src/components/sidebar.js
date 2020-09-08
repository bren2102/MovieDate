import React from 'react';
import { Icon } from '@iconify/react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import logoutIcon from '@iconify/icons-carbon/logout';

class SideBar extends React.Component {

  handleSubmit = () => {
    localStorage.setItem('username','')
  }
  render() {
    const { currentPage } = this.props
    return(
      <nav>
        <h1>Vmovie</h1>
        <ul>
          <Link to={'/Movies'}>
            <li style={{ backgroundColor: (currentPage === 'movies' ? '#97be10' : 'white'),}}>MOVIES</li>
          </Link>
          <li>LOCATIONS</li>
          <li>SNACKS</li>
          <Link to={'/Tickets'}>
            <li style={{ backgroundColor: (currentPage === 'tickets' ? '#97be10' : 'white'),}}>TICKETS</li>
          </Link>
        </ul>
        <div>
          <Link to={'/'}>
            <button onClick={this.handleSubmit}>
            <Icon icon={logoutIcon} style={{ color: '#484848', fontSize: '20px', marginRight: '10px', }} hFlip={true} />
            Logout</button>
          </Link>
          <span>&copy; 2020 Rights Reserved</span>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
 currentPage: state.currentPage,
});

export default connect(mapStateToProps,null)(withRouter(SideBar));