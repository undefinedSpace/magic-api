const syncData = require('../syncData');

const handler = (req, res) => {
    syncData.inserTree(req.body)
    res.end();
};

module.exports = {
    handler: handler,
    path: '/sync',
    method: 'all'
};