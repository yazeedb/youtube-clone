import moment from 'moment';

const timeUnits = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

const diffPublishDate = (date, unit) => moment(date).diff(new Date(), unit);

const pluralizeUnit = (diff, unit) => diff === 1 ? unit : `${unit}s`;

const formatRelativeTime = ({ diff, unit }) => (
	`${diff} ${pluralizeUnit(diff, unit)} ago`
);

const getSmallestDiff = (a, b) => a.diff < b.diff ? a : b;

const getLargestUnit = (date) => timeUnits
	// get the units and their diffs as of now
	.map((unit) => ({
		diff: Math.abs(diffPublishDate(date, unit)),
		unit
	}))
	// throw out any 0 values, e.g., we don't want "0 years ago"
	.filter(({ diff }) => diff > 0)
	// prefer "1 month ago" over "30 days ago"
	.reduce(getSmallestDiff);

export default (date) => formatRelativeTime(getLargestUnit(date));
