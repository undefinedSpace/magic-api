const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema, root } = require('../rootSchema');
const graphqlConf = require('../config/graphql.conf');

const conf = Object.assign(graphqlConf, {
    schema: schema,
    rootValue: root,
});

const initGraphql = app => {
    app.use(conf.path, graphqlHTTP(conf));
};

module.exports = initGraphql;