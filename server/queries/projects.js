const db = require('../bootstrap/initDBConnection');

const resolver = {
  projects: args => {
    return db('projects').where(args).select();
  },
};

module.exports = resolver;