let db = require('../connection');
let randomstring = require("randomstring");

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

for (let i = -7; i < 7; i++) {
  let count = randomInt(10, 20);
  for (let j = 0; j < count; j++) {
    let day = new Date();
    day.setDate(day.getDate() + i);
    day.setUTCHours(randomInt(0, 23), randomInt(0, 59), randomInt(0, 59), randomInt(0, 999));
    let status = {
      process: randomstring.generate(10),
      group: randomstring.generate(5),
      kind: randomstring.generate(5),
      task: randomstring.generate(10),
      msg: randomstring.generate(10),
      target_date: day,
      time_limit: randomstring.generate(2),
      ts: randomInt(0, 100),
      status: randomstring.generate(10)
    };
    db.insert(status);
  }
}

