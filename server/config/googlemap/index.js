'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC-G2zW-c2SCw19Y5K5FfhuucEGl3gHdqI',
  Promise: _promise2.default
});

module.exports = googleMapsClient;
//# sourceMappingURL=index.js.map
