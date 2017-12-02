const abbrMap = {
	10: 'B',
	7: 'M',
	4: 'k'
};

export default (number) => {
	if (number.length < 4) {
		return number;
	}

	const abbrKey = Object
		.keys(abbrMap)
		.reverse()
		.find((key) => number.length - key >= 0);

	return number.substring(0, number.length - abbrKey + 1) + abbrMap[abbrKey];
};
