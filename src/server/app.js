const express = require('express');
const fileDbIns = require('./fileDb/index');

const app = express();

app.get('/api/find/:context/:query/:size', (req, res) => {
  fileDbIns.loadData().then((db) => {
    const { params } = req;
    const { context, query, size } = params;
    const result = [];
    db[context].forEach((entity, index) => {
      if (typeof entity === 'string' && entity.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push({
          titles: db.titles[index],
          queries: db.queries[index],
          ...db.authors[index],
          ...db.summaries[index]
        });
      } else if (typeof entity !== 'string' && entity.summary.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push({
          titles: db.titles[index],
          queries: db.queries[index],
          ...db.authors[index],
          ...db.summaries[index]
        });
      }
    });

    if (size > 0) {
      res.status(200).send({
        ...params,
        data: result.slice(0, params.size)
      });
    } else {
      res.status(200).send({
        ...params,
        data: result
      });
    }
  });
});
app.get('/api/queries/all', (req, res) => {
  fileDbIns.loadData().then((db) => {
    res.status(200).send({
      data: db.queries
    });
  });
});
app.get('/api/titles/all', (req, res) => {
  fileDbIns.loadData().then((db) => {
    res.status(200).send({
      data: db.titles
    });
  });
});
app.get('/', (req, res) => {
  res.status(200).send('Hai, I am CourseBooks Search Engine API. Use My Services from api/find');
});

module.exports = app;
