'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.index = index;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _register = require('../register/register.controller');

var _user = require('../register/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redisClient = require('../../config/redis').redisClient;

// eslint-disable-next-line import/prefer-default-export
function index(req, res) {
  const keys = (0, _keys2.default)(req.body);
  if (keys.includes('userName') && keys.includes('password')) {
    const condition = {
      $or: [{ email: req.body.userName }, { mobileNo: req.body.userName }],
      password: (0, _register.decode)(req.body.password)
    };
    return _user2.default.findOne(condition, { password: 0,
      __v: 0,
      searchPlaces: 0,
      nearPlaces: 0 }).then(user => {
      if (user) {
        _jsonwebtoken2.default.sign({ user }, process.env.JWT_SECKERT_KEY, (err, token) => {
          if (err) {
            return res.status(500).json({ success: false, message: 'Something went wrong', data: '', err });
          }
          res.setHeader('Authorization', token);
          redisClient.set(`login-${user.email}`, token, 'EX', 3600);
          return res.status(200).json({ success: true, message: 'Login Successfully', data: user });
        });
      } else {
        return res.status(401).json({
          success: false,
          message: 'Incorrect Username and Password',
          data: req.body
        });
      }
      return true;
    }).catch(err => {
      console.log(err);
      return res.status(500).json({ success: false, message: 'Something went wrong', data: '' });
    });
  }
  return res.status(406).json({ success: false, message: 'You Miss some parameters', data: '' });
}
//# sourceMappingURL=login.controller.js.map
