const db = require('../bootstrap/initDBConnection');

const resolver = {
  files: args => {
    return db('servers').where(args).select();
  },
};

module.exports = resolver;