import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Search from 'material-ui/svg-icons/action/Search';
import Videocam from 'material-ui/svg-icons/av/Videocam';
import Scrollable from 'shared/Scrollable';

import './Nav.scss';

const getNavStyle = (scrollingDown) => ({
	position: 'fixed',
	top: scrollingDown ? '-50%' : 0,
	left: 0,
	transition: 'top 0.5s'
});

class Nav extends Component {
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
		const { scrollingDown } = this.state;

		return (
			<Scrollable onScroll={ this.onScroll }>
				<AppBar
					title="YouTube"
					className="nav"
					style={ getNavStyle(scrollingDown) }
					iconElementLeft={
						<IconButton>
							<span className="youtube-logo" />
						</IconButton>
					}
					iconElementRight={
						<div>
							<IconButton>
								<Videocam />
							</IconButton>
							<IconButton>
								<Search />
							</IconButton>
							<IconButton>
								<AccountCircle />
							</IconButton>
						</div>
					}
				/>
			</Scrollable>
		);
	}
}

export default Nav;
