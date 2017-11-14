const express = require('express');
const app = express();
const { join } = require('path');
const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'src/index.html'));
});

app.listen(PORT, () => console.log('listening on port', PORT));
