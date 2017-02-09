
const resolver = {
  projects: ({ id, hostname, token, ip }) => {
    let data = [{
            id: 1,
            ip: '127.0.0.1',
            hostname: 'localhost',
            token: "<text 1>"
        },
        {
            id: 2,
            ip: '127.0.0.1',
            hostname: 'localhost',
            token: "<text 2>"
        },
        {
            id: 3,
            ip: '192.0.0.2',
            hostname: '192.0.0.2',
            token: "<text 3>"
        }
    ];

    if (id) data = data.filter(item => item.id === id);
    if (hostname) data = data.filter(item => item.hostname === hostname);
    if (token) data = data.filter(item => item.token === token);
    if (ip) data = data.filter(item => item.ip === ip);

    return data;
  },
};

module.exports = resolver;