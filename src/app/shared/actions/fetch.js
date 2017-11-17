import fetch from 'isomorphic-fetch';

export const fetchTrendingVideos = () => (dispatch) => (
  fetch('/api/trending')
  .then((res) => {
    console.log('fetchTrendingVideos response:', res);
    return res.json();
  })
  .then((json) => {
    console.log('fetchTrendingVideos json:', json);
  })
);
