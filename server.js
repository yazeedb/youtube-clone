const express = require('express');
const app = express();
const { join } = require('path');
const PORT = 8080;

app.use(express.static(join(__dirname, 'dist')));

app.get('/trending', (req, res) => {
    const fakeTrendingData = require('./src/mock-json/trending.json');

    res.status(200).send(fakeTrendingData);
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'src/index.html'));
});

app.listen(PORT, () => console.log('listening on port', PORT));
