import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { youtubeRed } from 'src/theme';

const styles = {
	position: 'absolute',
	top: '45%',
	left: '45%'
};

const progress = (
	<CircularProgress
		color={ youtubeRed }
		className="loading"
		style={ styles }
	/>
);

export default ({ children, show, ...other }) => (
	<div { ...other }>
		{ show ? progress : children }
	</div>
);
