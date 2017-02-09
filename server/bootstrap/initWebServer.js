const express = require('express');
const path = require('path');
const app = express();
const graphqlHTTP = require('express-graphql');
const { port } = require('../config/webServer.conf'); 
const graphqlServer = require('./midlewareGraphqlServer'); 

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// midlewate
graphqlServer(app);

app.listen(port);