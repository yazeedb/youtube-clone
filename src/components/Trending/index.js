import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingVideos } from 'actions/fetch';
import Video from 'shared/Video';

class Trending extends Component {
	componentWillMount() {
		const { fetchTrendingVideos } = this.props;

		fetchTrendingVideos();
	}

	render() {
		console.log('trending props:', this.props);
		const { videos } = this.props;

		return (
			<div className="trending">
				{
					videos.map((vid) => (
						<Video
							config={ vid }
							videoPos="top"
							key={ vid.id }
						/>
					))
				}
			</div>
		);
	}
}

const mapStateToProps = ({ videoList }) => videoList;

export default connect(mapStateToProps, { fetchTrendingVideos })(Trending);
