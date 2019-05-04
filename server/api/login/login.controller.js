'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _register = require('../register/register.controller');

var _user = require('../register/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
function index(req, res) {
  const condition = {
    $or: [{ email: req.body.userName }, { mobileNo: req.body.userName }],
    password: (0, _register.decode)(req.body.password)
  };
  return _user2.default.findOne(condition, { password: 0, __v: 0 }).then(user => {
    console.log(user);
    if (user) {
      _jsonwebtoken2.default.sign({ user }, process.env.JWT_SECKERT_KEY, (err, token) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Something went wrong', data: '', err });
        }
        res.setHeader('Authorization', token);
        return res.status(200).json({ success: true, message: 'Login Successfully', data: user });
      });
    } else {
      return res.status(200).json({ success: false, message: 'Incorrect Username and Password', data: req.body });
    }
    return true;
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Something went wrong', data: '' });
  });
}
//# sourceMappingURL=login.controller.js.map
