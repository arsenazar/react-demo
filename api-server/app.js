'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');

require(`./config/seed-${config.get('DATA_BACKEND')}`);

const app = express();

app.disable('etag');
app.set('trust proxy', true);

// attempting to solve cors issues - need to be tightened up because this allows everything
app.use(cors());

app.use('/api/status', require('./status/api'));

// Redirect root to /status
app.get('/', (req, res) => {
  res.redirect('/status');
});

// Basic 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res, next) => {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

if (module === require.main) {
  // Start the server
  console.log(config.get('PORT'));
  const server = app.listen(config.get('PORT'), () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
