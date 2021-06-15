const Mongoose = require('mongoose');
const md5 = require('md5');

const usersSchema = Mongoose.Schema({
  email: String,
  password: String,
  avatar: String,
  alias: String,
  cart: []
});

usersSchema.methods.isValidPassword = function isValidPassword(password) {
  return md5(password) === this.password;
};

module.exports = Mongoose.model('Users', usersSchema);
