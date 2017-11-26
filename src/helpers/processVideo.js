export const processDetailedVideo = ({
	id,
	contentDetails: { duration },
	snippet: { channelId, channelTitle, thumbnails, title, publishedAt }
}) => ({
	id,
	title,
	thumbnail: thumbnails.high,
	publishedAt,
	duration,
	channelId,
	channelTitle,
});
