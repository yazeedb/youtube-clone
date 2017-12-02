import React from 'react';
import processDuration from 'helpers/processDuration';

const styles = {
	background: 'rgba(0, 0, 0, 0.9)',
	color: 'white',
	position: 'absolute',
	bottom: '5px',
	right: '5px',
	fontSize: '11px',
	padding: '2px 4px',
	borderRadius: '2px'
};

export default ({ duration }) => (
	<span className="running-time" style={ styles }>
		{ processDuration(duration) }
	</span>
);
