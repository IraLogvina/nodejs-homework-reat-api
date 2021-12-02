const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateIMG = require("./updateIMG");
const verify = require("./verify");
const reverify = require("./reverify");

module.exports = {
  register,
  login,
  logout,
  currentUser,
  updateIMG,
  verify,
  reverify
};
