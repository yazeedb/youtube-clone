import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Home from 'material-ui/svg-icons/action/home';
import WhatsHot from 'material-ui/svg-icons/social/whatshot';
import Subscriptions from 'material-ui/svg-icons/av/subscriptions';
import Folder from 'material-ui/svg-icons/file/folder';
import Paper from 'material-ui/Paper';
import './BottomNav.scss';

export default () => (
	<Paper zDepth={ 1 } className="bottom-nav">
		<BottomNavigation>
			<Link to="/">
				<BottomNavigationItem label="Home" icon={ <Home /> } />
			</Link>

			<Link to="trending">
				<BottomNavigationItem label="Trending" icon={ <WhatsHot /> } />
			</Link>

			<BottomNavigationItem label="Subscriptions" icon={ <Subscriptions /> } />
			<BottomNavigationItem label="Library" icon={ <Folder /> } />
		</BottomNavigation>
	</Paper>
);
