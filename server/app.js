const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
})

app.listen(8080);