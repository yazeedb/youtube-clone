import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FontIcon from 'material-ui/FontIcon';
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
  />
);
