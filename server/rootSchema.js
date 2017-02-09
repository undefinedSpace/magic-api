const root = require('./queries');
const { buildSchema } = require('graphql');


const schema = buildSchema(`
  type Event {
    id: String,
    description: String
  }

  type Project {
    id: Int,
    id_folder: Int,
    id_server: Int,
    path: Int,
    time_stamp: String,
    time_stop: String
  }

  type Folder {
    id: Int,
    name: String,
    inode: Int,
    id_parent: Int
  }

  type File {
    id: Int,
    name: String,
    inode: Int,
    id_parent: Int
    hash: Int
  }

  type Server {
    id: Int,
    ip: String,
    hostname: String,
    token: String
  }

  type Query {
    events: [Event]
    projects(id: Int, hostname: String, ip: String, token: String): [Project]
    folders(id: Int, id_parent: Int): [Folder]
    files(id: Int, id_parent: Int, hash: Int): [File]
    servers(id: Int, ip: String, hostname: String, token: String): [Server]
  }
`);

module.exports = { root, schema };