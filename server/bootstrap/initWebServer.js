const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const graphqlHTTP = require('express-graphql');
const { port } = require('../config/webServer.conf'); 
const graphqlServer = require('./midlewareGraphqlServer'); 

app.use(cors( {
  origin: 'http://127.0.0.1:4000',
  optionsSuccessStatus: 200,
  credentials: true
}));
app.use('/', express.static(path.join(__dirname, '..', '..', 'build')));

// midlewate
graphqlServer(app);

app.listen(port);