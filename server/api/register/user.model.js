'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  email: {
    type: String,
    unique: true
  },
  mobileNo: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  name: {
    type: String
  }

}, {
  timestamps: true
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
//# sourceMappingURL=user.model.js.map
