import React from 'react';
import { withRouter } from 'react-router';
import Nav from './shared/Nav';
import BottomNav from './shared/BottomNav';

const App = (props) => (
	<div className="youtube">
		{ console.log('app props:', props) }
		<Nav />
		<div class="content">
			{ props.children }
		</div>
		<BottomNav selectedIndex={ 1 } />
	</div>
);

export default withRouter(App);
