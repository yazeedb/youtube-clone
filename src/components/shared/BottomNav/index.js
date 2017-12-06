import React from 'react';
import { withRouter } from 'react-router';
import {
	BottomNavigation,
	BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Home from 'material-ui/svg-icons/action/home';
import WhatsHot from 'material-ui/svg-icons/social/whatshot';
import Subscriptions from 'material-ui/svg-icons/av/subscriptions';
import Folder from 'material-ui/svg-icons/file/folder';
import Paper from 'material-ui/Paper';
import './BottomNav.scss';

const iconMap = {
	Home: Home,
	Trending: WhatsHot,
	Subscriptions: Subscriptions,
	Library: Folder
};

const getActiveLink = (links, path) => links
	.map((link) => link.href)
	.findIndex((href) => href === path);

const getIcon = (name) => {
	const Icon = iconMap[name];

	return <Icon />;
};

export default withRouter(({ history, location, links }) => (
	<Paper zDepth={ 1 } className="bottom-nav">
		<BottomNavigation
			selectedIndex={ getActiveLink(links, location.pathname) }
		>
			{
				links.map(({ name, href }) => (
					<BottomNavigationItem
						label={ name }
						icon={ getIcon(name) }
						key={ name }
						onClick={ () => history.push(href) }
					/>
				))
			}
		</BottomNavigation>
	</Paper>
));
