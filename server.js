'use strict';

const express = require('express');
const path = require('path');
var cors = require('cors');

const serverApi = require('./serverApi');

const app = express();

const indexPage = path.join(__dirname, '/dist',  '/index.html');



var corsOptions = {
  origin: 'http://liangpeter.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/view", cors(corsOptions), express.static(path.resolve(path.join(__dirname, '/dist'))));

app.get('/view/*', cors(corsOptions), (req, res) => {
  res.sendFile(indexPage);
});

serverApi.apiDef(app, cors);

app.use(cors(corsOptions), express.static(path.resolve(path.join(__dirname, '/dist'))));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});