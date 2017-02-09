const fs = require('fs');

let resolvers = {};
fs.readdirSync(__dirname).forEach(f => {
    if (f === 'index.js') return;

    resolvers = Object.assign(resolvers, require(`./${f}`));
});


module.exports = resolvers;