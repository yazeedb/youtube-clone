import { Component } from 'react';

class Scrollable extends Component {
	constructor(props) {
		super(props);
		this.onScroll = this.onScroll.bind(this);
	}

	componentWillMount() {
		document.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.onScroll);
	}

	onScroll(e) {
		console.log('my onscroll was called', e);

		const { onScroll } = this.props;
		onScroll(e);
	}

	render() {
		return this.props.children;
	}
}

export default Scrollable;
