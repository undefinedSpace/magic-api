const root = require('./queries');
const { buildSchema } = require('graphql');


const schema = buildSchema(`
  type Event {
    id: String,
    description: String
  }

  type Project {
    id: Int,
    ip: String,
    hostname: String,
    token: String
  }

  type Query {
    hello: String,
    events: [Event],
    projects(id: Int, hostname: String, ip: String, token: String): [Project]
  }
`);

module.exports = { root, schema };