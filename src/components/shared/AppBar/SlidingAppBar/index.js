import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Scrollable from 'shared/Scrollable';

const getSlidingStyles = (scrollingDown) => ({
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

		if (currentPageYOffset <= 0) {
			return;
		}

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
		const { scrollingDown } = this.state;

		return (
			<Scrollable onScroll={ this.onScroll }>
				<AppBar
					style={ getSlidingStyles(scrollingDown) }
					{ ...this.props }
				/>
			</Scrollable>
		);
	}
}

export default SlidingAppBar;
