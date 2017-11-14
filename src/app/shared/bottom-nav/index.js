import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Home from 'material-ui/svg-icons/action/home';
import WhatsHot from 'material-ui/svg-icons/social/whatshot';
import Subscriptions from 'material-ui/svg-icons/av/subscriptions';
import Folder from 'material-ui/svg-icons/file/folder';
import Paper from 'material-ui/Paper';
import './bottom-nav.scss';

export default () => (
  <Paper zDepth={ 1 } className="bottom-nav">
    <BottomNavigation>
      <BottomNavigationItem label="Home" icon={ <Home /> } />
      <BottomNavigationItem label="Trending" icon={ <WhatsHot /> } />
      <BottomNavigationItem label="Subscriptions" icon={ <Subscriptions /> } />
      <BottomNavigationItem label="Library" icon={ <Folder /> } />
    </BottomNavigation>
  </Paper>
);
