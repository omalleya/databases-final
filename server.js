const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 14928;

var connection = mysql.createConnection({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_omalleya',
    password: '6922',
    database: 'cs340_omalleya',
});

connection.connect();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/activities', function(req, res) {
  connection.query('SELECT * FROM activities;', function(err, result) {
    res.send(result); 
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
