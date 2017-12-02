import React from 'react';
import processDuration from 'helpers/processDuration';

const styles = {
	background: 'rgba(0, 0, 0, 0.6)',
	color: 'white',
	position: 'absolute',
	bottom: '5px',
	right: '5px',
	fontSize: '11px',
	padding: '1px 4px',
	borderRadius: '2px'
};

export default ({ duration }) => (
	<span className="running-time" style={ styles }>
		{ processDuration(duration) }
	</span>
);
