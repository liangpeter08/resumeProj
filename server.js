'use strict';

const express = require('express');
const path = require('path');
var cors = require('cors');
const axios = require('axios');

const app = express();

const indexPage = path.join(__dirname, '/dist',  '/index.html');

const rootCloudFunc = 'https://us-central1-resumeproj.cloudfunctions.net/';

var corsOptions = {
  origin: 'http://liangpeter.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use("/view", cors(corsOptions), express.static(path.resolve(path.join(__dirname, '/dist'))));

app.get('/view/*', cors(corsOptions), (req, res) => {
  res.sendFile(indexPage);
});

app.get('/api/user', cors(corsOptions), (req, res, next) => {
  console.log('get user');
  try {
    console.log(req.query);
    axios.get(rootCloudFunc + 'user', {params: req.query})
      .then((result) => {
        console.log(result.data);
        res.status(200).json(result.data);
      })
      .catch((err) => res.send(err));
  } catch(err) {
    console.log('error:' + req);
  }
});

app.get('/api/notes', cors(corsOptions), (req, res, next) => {
  console.log('get notes');
  try {
    console.log(req.query);
    axios.get(rootCloudFunc + 'notes', {params: req.query})
      .then((result) => {
        console.log(result.data);
        res.status(200).json(result.data);
      })
      .catch((err) => res.send(err));
  } catch(err) {
    console.log('error:' + req);
  }
});

app.use(cors(corsOptions), express.static(path.resolve(path.join(__dirname, '/dist'))));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});