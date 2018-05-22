const express = require('express');
const path = require('path');

const app = express();
const port = 14928;

app.use(express.static(path.join(__dirname, 'dist')));
app.listen(port, () => console.log(`Listening on port ${port}`));
