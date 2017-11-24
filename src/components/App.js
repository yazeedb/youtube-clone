import React from 'react';
import { withRouter } from 'react-router';
import PrimaryAppBar from './shared/AppBar/PrimaryAppBar';
import BottomNav from './shared/BottomNav';

const App = (props) => (
	<div className="youtube">
		{ console.log('app props:', props) }
		<PrimaryAppBar />

		<div className="content">
			{ props.children }
		</div>

		<BottomNav selectedIndex={ 1 } />
	</div>
);

export default withRouter(App);
