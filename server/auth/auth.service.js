// /* eslint-disable max-len, import/prefer-default-export */
// import jwt from 'jsonwebtoken';
//
// const redisClient = require('../config/redis').redisClient;
//
//
// /**
//  * Attaches the user object to the request if authenticated
//  * Otherwise returns 403
//  */
//
// export function isAuthenticated(req, res, next) {
//   const bearerHeader = req.header('Authorization');
//   if (typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(' ');
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     jwt.verify(req.token, process.env.JWT_SECKERT_KEY, (err, authData) => {
//       if (err || typeof authData === 'undefined') {
//         res.status(403).json({ success: false, msg: 'Unauthorised access3' });
//       } else {
//         redisClient.get(`R${authData.user.PM_Client_MobileNumber}`, (err, reply) => {
//           console.log(reply);
//           if (err) {
//             res.status(403).json({ success: false, msg: 'Unauthorised access2' });
//           } else if (reply === req.token) {
//             redisClient.set(`R${authData.user.PM_Client_MobileNumber}`, `${req.token}`);
//             // redisClient.expire(`R${authData.user.PM_User_MobileNumber}`, process.env.IDEL_SESSION_TIME); // session time
//             req.authData = authData.user;
//             return next();
//           } else {
//             console.log(reply);
//             res.status(403).json({ success: false, msg: 'Unauthorised access1' });
//           }
//         });
//       }
//     });
//   } else {
//     res.status(403).json({ success: false, msg: 'Unauthorised access4' });
//   }
//   // });
// }
"use strict";
//# sourceMappingURL=auth.service.js.map
