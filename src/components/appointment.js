import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import xPack from '@iconify/icons-cib/x-pack';

const Appointment = (props) => {
  const { name } = props.match.params;
  return (
    <div id="appointment">
      <Icon icon={xPack} style={{ color: 'white', fontSize: '30px' }} />
      <h1>BOOK YOUR MOVIE DATE</h1>
      <div id="line"></div>
      {name}
      <Link to={`/${name}`}>
        <button>BOOK NOW</button>
      </Link>
    </div>
  );
}

export default withRouter(Appointment); 