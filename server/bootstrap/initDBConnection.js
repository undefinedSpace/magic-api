const mysql  = require('mysql');
const dbConf = require('../config/database.conf');

let connection;

const connect = () => {
    if (connection) return connection;

    connection = mysql.createConnection(dbConf);
    connection.connect();

    return connection;
};

return connect();