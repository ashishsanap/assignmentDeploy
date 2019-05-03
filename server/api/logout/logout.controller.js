'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
function index(req, res) {
  redisClient.del(`R${req.authData.PM_Client_MobileNumber}`, err => {
    if (err) {
      res.json({
        success: true,
        msg: 'logout'
      });
    } else {
      res.json({
        success: true,
        msg: 'logout'
      });
    }
  });
  LoginSession.update({ LoginStatus: 0, TimestampLogout: new Date() }, { where: { UserID: req.authData.PM_UserID, LoginStatus: 1 } }).then(() => {}).catch(() => {
    res.status(500).send({ success: false, msg: 'Something Went Wrong' });
  });
}
//# sourceMappingURL=logout.controller.js.map
