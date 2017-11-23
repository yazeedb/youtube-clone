import fetch from 'isomorphic-fetch';
import { setVideoList } from './videoList';

export const fetchTrendingVideos = () => (dispatch) => (
	fetch('/api/trending')
		.then((res) => {
			console.log('fetchTrendingVideos response:', res);
			return res.json();
		})
		.then((json) => {
			console.log('fetchTrendingVideos json:', json);
			dispatch(setVideoList(json.items));
		})
);
