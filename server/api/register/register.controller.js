'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.decode = decode;
exports.index = index;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _user = require('./user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable consistent-return,max-len,no-param-reassign */
function decode(value) {
  const key = _crypto2.default.createCipher(process.env.CRYPTO_ALGO, process.env.SECRET_KEY); // abc replace by some data
  let password = key.update(value, 'utf8', 'hex');
  password += key.final('hex');
  return password;
}
// eslint-disable-next-line import/prefer-default-export
function index(req, res) {
  const keys = (0, _keys2.default)(req.body);
  if (keys.includes('email') && keys.includes('mobileNo') && keys.includes('password')) {
    req.body.password = decode(req.body.password);
    _user2.default.create(req.body).then(user => {
      console.log(user);
      return res.status(201).json({ success: true, message: 'Account Created Successfully', data: user });
    }).catch(err => {
      if (err.errmsg.includes('duplicate')) {
        return res.status(409).json({
          success: false,
          message: 'Account Already Present',
          data: 'Email or Mobile Number already register'
        });
      }
      return res.status(500).json({ success: false, message: 'Something Went wrong', data: '', err });
    });
  } else {
    return res.status(406).json({ success: false, message: 'You Miss some parameters', data: '' });
  }
}
//# sourceMappingURL=register.controller.js.map
