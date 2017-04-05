'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

function getModel () {
  return require(`./model-${config.get('DATA_BACKEND')}`);
}

const router = express.Router();

// Automatically parse request body as JSON
router.use(bodyParser.json());

/**
 * GET /api/status
 *
 * Provides a list of status descriptions for a list of tasks expected today.
 */
router.get('/', (req, res, next) => {
  getModel().listOfDay(new Date(), (err, entities) => {
    if (err) {
      next(err);
      return;
    }
    res.json(entities);
  });
});

/**
 * GET /api/status/:date
 *
 * Retrieve a status by date.
 */
router.get('/:date', (req, res, next) => {
  getModel().listOfDay(req.params.date, (err, entities) => {
    if (err) {
      next(err);
      return;
    }
    res.json(entities);
  });
});

/**
 * Errors on "/api/status/*" routes.
 */
router.use((err, req, res, next) => {
  // Format error and forward to generic error handler for logging and
  // responding to the request
  err.response = {
    message: err.message,
    internalCode: err.code
  };
  next(err);
});

module.exports = router;
