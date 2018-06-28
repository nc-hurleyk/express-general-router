const http = require('http');
const express = require('express');
const app = express();

const baseRouter = require('./routers/base.js');

// Needed for local example
app.server = http.createServer(app);

app.use('/', baseRouter);

// The best error handler.
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send({ error: err });
  }
});

app.server.listen(1337, () => {
  console.log('Started on port 1337');
});
