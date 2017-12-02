import React from 'react';
import RunningTime from './RunningTime';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import './Video.scss';

export default ({
	config,
	actions,
	videoPos
}) => (
	<div className="video">
		<div className="thumbnail-container">
			<div
				className="thumbnail"
				style={ { backgroundImage: `url(${config.thumbnail.url})` } }
			/>
			<RunningTime duration={ config.duration } />
		</div>
	</div>
);
