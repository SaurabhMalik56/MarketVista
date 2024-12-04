const {model} = require("mongoose");
const {userSchema} = require("../schemas/User.js");
const User = new model('User', userSchema);
module.exports = {User};