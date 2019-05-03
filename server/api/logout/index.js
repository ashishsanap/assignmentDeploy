'use strict';

const express = require('express');
const controller = require('./logout.controller');

const router = express.Router();
router.get('/', controller.index); // user/get


module.exports = router;
//# sourceMappingURL=index.js.map
