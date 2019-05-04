'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.nearby = nearby;

var _user = require('../register/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
function index(req, res) {
  _user2.default.findById(req.user._id, { searchPlaces: 1, _id: 0 }).then(result =>
  // sss
  res.status(200).json({ success: true, message: 'Places search by user', data: result })).catch(err => {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Something went wrong' });
  });
} /* eslint-disable no-underscore-dangle */

function nearby(req, res) {
  _user2.default.findById(req.user._id, { nearPlaces: 1, _id: 0 }).then(result =>
  // sss
  res.status(200).json({ success: true, message: 'Places search by user', data: result })).catch(err => {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Something went wrong' });
  });
}
//# sourceMappingURL=user.controller.js.map
