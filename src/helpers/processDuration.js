import moment from 'moment';
import 'moment-duration-format';

export default (duration) => moment
	.duration(duration, 'seconds')
	.format('h:mm:ss')
	.padStart(4, '0:0');
