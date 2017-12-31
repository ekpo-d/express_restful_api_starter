const mongoose = require('mongoose');

function toLower(v) {
  return v.toLowerCase();
}

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  username: {type: String, required: true, unique: true, set: toLower},
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    set: toLower
  },
  password: { type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);