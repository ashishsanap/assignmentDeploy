'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = connectMongo;
exports.getObjectID = getObjectID;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectMongo() {
  _mongoose2.default.set('useCreateIndex', true);
  _mongoose2.default.set('useFindAndModify', false);
  console.log(process.env.DB_HOST);
  return new _promise2.default((resolve, reject) => _mongoose2.default.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true
  }).then(yes => resolve('conneted', yes)).catch(err => reject('not connected' + err, err)));
}

function getObjectID(ID) {
  return _mongoose2.default.Types.ObjectId(ID);
}
//# sourceMappingURL=index.js.map
