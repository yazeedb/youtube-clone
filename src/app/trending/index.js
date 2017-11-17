import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingVideos } from '../shared/actions/fetch';

class Trending extends Component {
  componentWillMount() {
    const { fetchTrendingVideos } = this.props;

    fetchTrendingVideos();
  }

  render() {
    return (
      <div className="trending">
        trending
      </div>
    );
  }
}

const mapStateToProps = ({ videoList }) => videoList;

export default connect(mapStateToProps, { fetchTrendingVideos })(Trending);
