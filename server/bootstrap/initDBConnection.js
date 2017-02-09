const knex  = require('knex');
const dbConf = require('../config/database.conf');

let connection;

const connect = () => {
    if (connection) return connection;

    connection = knex(dbConf);
    return connection;
};

module.exports = connect();