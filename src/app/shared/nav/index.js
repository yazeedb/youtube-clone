import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import './nav.scss';

export default () => (
   <AppBar
    className="nav"
    iconElementLeft={
      <IconButton>
        <span className="youtube-logo"></span>
      </IconButton>
    }
  />
);
