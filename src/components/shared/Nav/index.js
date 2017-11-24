import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Search from 'material-ui/svg-icons/action/Search';
import Videocam from 'material-ui/svg-icons/av/Videocam';

import './Nav.scss';

const Nav = ({ ...props }) => (
	<AppBar
		title="YouTube"
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
		{ ...props }
	/>
);

export default Nav;
