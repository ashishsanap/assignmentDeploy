'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-process-env:0 */

const root = _path2.default.normalize(`${__dirname}/../../../`);

const env = _dotenv2.default.config({ path: _path2.default.join(root, '.env') });

const all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: _path2.default.normalize(`${__dirname}/../../..`),

  // dev client port
  clientPort: process.env.CLIENT_PORT || 3000,

  // Server port
  PORT: process.env.PORT || 9000
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = all;
//# sourceMappingURL=index.js.map
