import React from 'react';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Search from 'material-ui/svg-icons/action/Search';
import Videocam from 'material-ui/svg-icons/av/Videocam';

import SlidingAppBar from '../SlidingAppBar';
import YouTubeLogo from 'assets/youtube_social_icon_red.png';

export default (props) => (
	<SlidingAppBar
		title="YouTube"
		iconElementLeft={
			<IconButton>
				<img src={ YouTubeLogo } />
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
