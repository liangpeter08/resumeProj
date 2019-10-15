'use strict';

const express = require('express');
const path = require('path');

const app = express();

const indexPage = path.join(__dirname, '/dist',  '/index.html');


app.use("/view", express.static(path.resolve(path.join(__dirname, '/dist'))));

app.get('/view/*',  (req, res) => {
  res.sendFile(indexPage);
});

app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});