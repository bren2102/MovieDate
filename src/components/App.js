import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxChevronRightCircle from '@iconify/icons-bx/bx-chevron-right-circle';

const App = () => (
  <div className="app">
    <h1>THE NEW MOVIE DATE</h1>
    <button>
      Log in
      <Icon icon={bxChevronRightCircle} style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }} />
    </button>
  </div>
);
export default App;