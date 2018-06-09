const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 14925;

var connection = mysql.createConnection({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_omalleya',
    password: '6922',
    database: 'cs340_omalleya',
});

connection.connect();

app.use(express.static(path.join(__dirname, 'dist')));

//this is to get routing to work correctly on refresh
app.get('/*', function(req, res, next) {
  if (req.url.includes('api')) {
    next();
  } else {
    res.sendFile(path.join(__dirname, 'dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    });
  }
});

// endpoint for getting everything related to activities
app.get('/api/activity/:id', function(req, res) {
  connection.query(`SELECT * FROM activities where id=${req.param('id')};`, function(err, result) {
    res.json(result);
  });
});

// endpoint for getting everything related to activities
app.get('/api/activities', function(req, res) {
  connection.query('SELECT * FROM activities;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting everything related to topics activities relationship
app.get('/api/topicsactivities', function(req, res) {
  connection.query('select * from topics_activities_relation;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting activities and their ids
app.get('/api/activitiesDropdown', function(req, res) {
  connection.query('select id, name from activities;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting necessities for sources dropdown
app.get('/api/sourcesDropdown', function(req, res) {
  connection.query('select id, name from sources;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting necessities for locations dropdown
app.get('/api/locationsDropdown', function(req, res) {
  connection.query('select id, name from locations;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting necessities for topics dropdown
app.get('/api/topicsDropdown', function(req, res) {
  connection.query('select id, name from topics;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting everything related to reading activities including the normal activity fields
app.get('/api/reading', function(req, res) {
  connection.query('SELECT * FROM reading INNER JOIN activities ON activities.id=reading.aid;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting everything related to reading activities including the normal activity fields
app.get('/api/acting', function(req, res) {
  connection.query('SELECT * FROM acting INNER JOIN activities ON activities.id=acting.aid;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting everything related to reading activities including the normal activity fields
app.get('/api/listening', function(req, res) {
  connection.query('SELECT * FROM listening INNER JOIN activities ON activities.id=listening.aid;', function(err, result) {
    res.json(result);
  });
});

// endpoint for getting everything related to reading activities including the normal activity fields
app.get('/api/speaking', function(req, res) {
  connection.query('SELECT * FROM speaking INNER JOIN activities ON activities.id=speaking.aid;', function(err, result) {
    res.json(result);
  });
});

// endpoint for deleting activities
app.get('/api/deleteActivity/:id', function(req, res) {
  connection.query(`DELETE FROM activities WHERE id=${req.param('id')};`, function(err, result) {
    res.json(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
