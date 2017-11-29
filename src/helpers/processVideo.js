export const processForDetailedList = ({
	id,
	contentDetails: { duration },
	snippet: { channelId, channelTitle, thumbnails, title, publishedAt }
}) => ({
	id,
	title,
	thumbnail: thumbnails.medium,
	publishedAt,
	duration,
	channelId,
	channelTitle,
});
