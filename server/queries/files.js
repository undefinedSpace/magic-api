const db = require('../bootstrap/initDBConnection');

const resolver = {
  files: args => {
    return db('files').where(args).select();
  },
};

module.exports = resolver;