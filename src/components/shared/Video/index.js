import React from 'react';
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
			<div className="timestamp">
				<span>4:35</span>
			</div>
		</div>
	</div>
);
