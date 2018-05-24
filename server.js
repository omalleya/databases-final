const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 14929;

var connection = mysql.createConnection({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_omalleya',
    password: '6922',
    database: 'cs340_omalleya',
});

connection.connect();

app.use(express.static(path.join(__dirname, 'dist')));

//this is to get routing to work
// app.get('/app/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

// endpoint for getting everything related to activities
app.get('/api/activities', function(req, res) {
  connection.query('SELECT * FROM activities;', function(err, result) {
    res.body = result;
    // res.send(result); 
    res.json(result);
  });
});

// endpoint for getting everything related to reading activities including the normal activity fields
app.get('/api/reading', function(req, res) {
  connection.query('SELECT * FROM reading INNER JOIN activities ON activities.id=reading.aid;', function(err, result) {
    res.body = result;
    // res.send(result);
    res.json(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
