'use strict';

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redisClient = _redis2.default.createClient({ host: process.env.REDISCLOUD_URL, port: process.env.REDIS_PORT });

redisClient.on('ready', () => {
  console.log('start redis');
});

redisClient.on('error', error => {
  console.log('Error in Redis', error);
});

module.exports = { redisClient };
//# sourceMappingURL=index.js.map
