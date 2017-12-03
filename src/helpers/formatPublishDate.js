import moment from 'moment';

const timeUnits = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
const diffPublishDate = (date, unit) => moment(date).diff(new Date(), unit);
const pluralizeUnit = (diff, unit) => diff > 1 ? `${unit}s` : unit;
const formatRelativeTime = (diff, unit) => (
	`${diff} ${pluralizeUnit(diff, unit)} ago`
);

export default (date) => timeUnits
	// get the units and their diffs as of now
	.map((unit) => ({
		diff: Math.abs(diffPublishDate(date, unit)),
		unit
	}))
	// throw out any 0 values, e.g., we don't want "0 years ago"
	.filter(({ diff }) => diff > 0)
	// turn them into a human readable format
	.map(({ diff, unit }) => formatRelativeTime(diff, unit))
	// use the last value, e.g., prefer "1 month ago" over "30 days ago"
	.reduce((values) => values);
