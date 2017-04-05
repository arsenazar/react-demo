'use strict';

let db = require('../connection');

function listOfDay(date, cb) {
  let ini = new Date(date);
  let end = new Date(date);
  ini.setUTCHours(0, 0, 0, 0);
  end.setUTCHours(24, 0, 0, 0);
  let filter = { target_date: {$gte: ini, $lte: end} };
  db.find(filter).sort({target_date: 1}).exec((err, results) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, results);
    }
  );
}

function createSchema () {
}

module.exports = {
  createSchema: createSchema,
  listOfDay: listOfDay,
};

