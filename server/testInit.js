const fs = require('fs');
const db = require('./bootstrap/initDBConnection');

const backupFileName = __dirname + '/../backup/init.json';

const readJSON = fileName => new Promise((reolve, reject) => (
    fs.readFile(fileName, { ecnoding: 'utf-8'}, (err, data) => {
        if (err) reject(err);
        reolve(JSON.parse(data));
    })
));

const insertRow = (data, parentId, serverId) => {
    return db(`${data.type}s`).insert({
        "name": data.name,
        "inode": data.inode,
        "hash": data.crc || 0,
        "id_server": serverId,
        "id_parent": parentId
    }).returning('id');
};

const eachContent = (data, parentId = 0, serverId = 1) => {
    console.log(`Insert ${data.type} ${data.name}`)
    insertRow(data, parentId, serverId).then(([ id ]) => {
        if (data.content && data.content.length) {
            data.content.forEach(item => {
                eachContent(item, id);
            });
        }
    });
};

readJSON(backupFileName).then(data => {
    eachContent(data);
});