const express = require('express');
const app = express();
const { join } = require('path');
const PORT = 3000;

app.use(express.static(join(__dirname, 'dist')));

app.get('/api/trending', (req, res) => {
	const fakeTrendingData = require('./mock-json/trending.json');

	res.status(200).send(fakeTrendingData);
});

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, 'src/index.html'));
});

app.listen(PORT, () => console.log('listening on port', PORT));
