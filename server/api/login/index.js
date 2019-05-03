'use strict';

const express = require('express');
const controller = require('./login.controller');

const router = express.Router();
router.get('/', controller.index);

module.exports = router;
//# sourceMappingURL=index.js.map
