const db = require('../bootstrap/initDBConnection');

const resolver = {
  folders: args => {
    return db('folders').where(args).select();
  },
};

module.exports = resolver;