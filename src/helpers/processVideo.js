export const processForDetailedList = ({
	id,
	contentDetails: { duration },
	snippet: { channelId, channelTitle, thumbnails, title, publishedAt },
	statistics: { viewCount }
}) => ({
	id,
	title,
	thumbnail: thumbnails.high,
	publishedAt,
	duration,
	channelId,
	channelTitle,
	viewCount
});
