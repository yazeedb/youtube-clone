import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import RunningTime from './RunningTime';
import './Video.scss';
// temporary channel thumbnail
import Cat from 'assets/cat.png';

import abbrNumber from 'helpers/abbrNumber';
import formatPublishDate from 'helpers/formatPublishDate';

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
		<div className="details-container">
			<img src={ Cat } />

			<div className="details">
				<span className="title">{ config.title }</span>

				<ul>
					<li>
						{ config.channelTitle }
					</li>
					<li>
						{ abbrNumber(config.viewCount) } views
					</li>
					<li>
						{ formatPublishDate(config.publishedAt) }
					</li>
				</ul>
			</div>

			<IconButton
				style={{
					padding: 0,
					width: '24px',
					height: '24px'
				}}
			>
				<MoreVert />
			</IconButton>
		</div>
	</div>
);
