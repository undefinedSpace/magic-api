const db = require('../bootstrap/initDBConnection');

const resolver = {
  events: args => {
    return db('events').select();
  },
};

module.exports = resolver;