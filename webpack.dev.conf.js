let devConfig = require('mozilla-neo/config/webpack.dev');

devConfig.devtool = 'cheap-inline-source-map';
devConfig.module.preLoaders = [];
devConfig.devServer.host = '0.0.0.0';

//
devConfig.module.loaders[7].query.mimetype = 'image/svg+xml';

module.exports = devConfig;