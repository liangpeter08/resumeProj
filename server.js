'use strict';

const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const router2 = express.Router();

app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));

const indexPage = path.join(__dirname, '/dist',  '/index.html');

router.get('/', (req, res) => {
  res.sendFile(indexPage);
});

router2.get(/.*/, (req, res) => {
  res.sendFile(indexPage);
});

app.use('/', router);
app.use("/view", router2);
app.use("/api", router);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});