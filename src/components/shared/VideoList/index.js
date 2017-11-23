import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
// import dotsVert from 'material-ui/svg-icons/navigation/more-vert';

export default ({ videos }) => (
	<GridList
		className="video-list"
		cols={ 1 }
		cellHeight="auto"
	>
		{
			videos.map((vid) => (
				<GridTile
					key={ vid.id }
					title={ vid.snippet.title }
				>
					<img src={ vid.snippet.thumbnails.default.url } />
				</GridTile>
			))
		}
	</GridList>
);
