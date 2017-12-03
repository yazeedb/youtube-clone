import moment from 'moment';
import 'moment-duration-format';
import 'polyfills/string.padStart';

export default (duration) => moment
	.duration(duration)
	.format('h:mm:ss')
	.padStart(4, '0:0');
