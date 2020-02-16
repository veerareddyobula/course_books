const express = require('express');

const app = express();

app.use('*', (req, res) => {
    res.status(200).send('Hai, I am CourseBooks Search Engine API. Use My Services from api/find');
  });

module.exports = app;
