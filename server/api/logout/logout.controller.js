'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
const redisClient = require('../../config/redis').redisClient;

// eslint-disable-next-line import/prefer-default-export
function index(req, res) {
  redisClient.del(`login-${req.user.email}`, (err, reply) => {
    console.log(err, reply);
    if (err) {
      return res.status(500).json({ success: false, message: 'Something went wrong', data: '', err });
    }
    return res.status(200).json({ success: true, message: 'Logout Successfully', data: '' });
  });
}
//# sourceMappingURL=logout.controller.js.map
