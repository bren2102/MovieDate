import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import bxChevronRightCircle from '@iconify/icons-bx/bx-chevron-right-circle';

const Login = () => (
  <div id="login">
    <h1>THE NEW MOVIE DATE</h1>
    <Link to={'/Movies'}>
      <button>
        Log in
          <Icon icon={bxChevronRightCircle} style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }} />
      </button>
    </Link>
  </div>
)

export default withRouter(Login);