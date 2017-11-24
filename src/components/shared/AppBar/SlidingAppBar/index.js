import React, { Component } from 'react';
import Scrollable from 'shared/Scrollable';
import AppBar from '../';

const getAppBarStyle = (scrollingDown) => ({
	position: 'fixed',
	top: scrollingDown ? '-50%' : 0,
	left: 0,
	transition: 'top 0.5s'
});

class SlidingAppBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			oldPageYOffset: window.pageYOffset,
			scrollingDown: false
		};

		this.onScroll = this.onScroll.bind(this);
	}

	onScroll() {
		const { oldPageYOffset } = this.state;
		const currentPageYOffset = window.pageYOffset;
		const scrollingDown = currentPageYOffset > oldPageYOffset;

		console.log('oldPageYOffset:', oldPageYOffset);
		console.log('currentPageYOffset:', currentPageYOffset);
		console.log('scrollingDown:', scrollingDown);

		this.setState({
			scrollingDown,
			oldPageYOffset: currentPageYOffset
		});
	}

	render() {
		return (
			<Scrollable onScroll={ this.onScroll }>
				<AppBar
					style={ getAppBarStyle(this.state.scrollingDown) }
					{ ...this.props }
				/>
			</Scrollable>
		);
	}
}

export default SlidingAppBar;
