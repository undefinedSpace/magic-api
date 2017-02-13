const db = require('../bootstrap/initDBConnection');

const resolver = {
  projects: ({ id, hostname, token, ip }) => {
    return db('projects').where(args).select();
  },
};

module.exports = resolver;