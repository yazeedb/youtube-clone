import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoList from 'shared/VideoList';
import { fetchTrendingVideos } from 'actions/fetch';

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
        <VideoList videos={ videos } />
      </div>
    );
  }
}

const mapStateToProps = ({ videoList }) => videoList;

export default connect(mapStateToProps, { fetchTrendingVideos })(Trending);
