import React from 'react';
import PrimaryAppBar from './shared/AppBar/PrimaryAppBar';
import BottomNav from './shared/BottomNav';

const App = (props) => (
	<div className="youtube">
		{ console.log('app props:', props) }
		<PrimaryAppBar />

		<div className="content">
			{ props.children }
		</div>

		<BottomNav
			links={[
				{ name: 'Home', href: '/' },
				{ name: 'Trending', href: '/trending' },
				{ name: 'Subscriptions', href: '/subscriptions' },
				{ name: 'Library', href: '/library' }
			]}
		/>
	</div>
);

export default App;
