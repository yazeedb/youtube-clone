import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Search from 'material-ui/svg-icons/action/Search';
import Videocam from 'material-ui/svg-icons/av/Videocam';

import './nav.scss';

export default () => (
   <AppBar
    title="YouTube"
    titleStyle={ { fontWeight: 'bold' } }
    className="nav"
    iconElementLeft={
      <IconButton>
        <span className="youtube-logo" />
      </IconButton>
    }
    iconElementRight={
      <div>
        <IconButton>
          <Videocam />
        </IconButton>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    }
  />
);
