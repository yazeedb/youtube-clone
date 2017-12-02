import fetch from 'isomorphic-fetch';
import { setVideoList } from './videoList';
import { processForDetailedList } from 'helpers/processVideo';

export const fetchTrendingVideos = () => (dispatch) => (
	fetch('/api/trending')
		.then((res) => {
			console.log('fetchTrendingVideos response:', res);

			return res.json();
		})
		.then((json) => {
			console.log('fetchTrendingVideos json:', json);

			const processedVideos = json.items.map(processForDetailedList);

			dispatch(setVideoList(processedVideos));
		})
);
