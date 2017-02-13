const express = require('express'),
      path = require('path'),
      cors = require('cors'),
      fs = require('fs'),
      app = express(),
      graphqlHTTP = require('express-graphql'),
      bodyParser = require('body-parser'),
      { port } = require('../config/webServer.conf'),
      graphqlServer = require('./midlewareGraphqlServer'); 

const STATIC_PATH = path.join(__dirname, '..', '..', 'build'),
      PAGES_PATH = `${__dirname}/../pages`;


// load routes
const files = fs.readdirSync(PAGES_PATH);

files.forEach(name => {
    const { path, handler, method = 'all' } = require(`${PAGES_PATH}/${name}`);

    console.log(`Register handler ${method}`, path);
    app[method](path, bodyParser.json({limit: '20mb'}), handler);
});

// cors
app.use(cors( {
  origin: 'http://127.0.0.1:4000',
  optionsSuccessStatus: 200,
  credentials: true
}));

// static files
app.use('/', express.static(STATIC_PATH));

// for html5 nav
app.use((req, res, next) => {
  res.sendFile(`${STATIC_PATH}/index.html`);
});

// midlewate
graphqlServer(app);

app.listen(port);