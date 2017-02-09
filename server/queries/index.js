const fs = require('fs');
const { schema, resolver } = require('./testQuery');

let resolvers = {};
fs.readdirSync(__dirname).forEach(f => {
    if (f === 'index.js') return;

    resolvers = Object.assign(resolvers, require(`./${f}`));
});


module.exports = resolvers;