const mongoose = require('mongoose');

function toLower(v) {
  return v.toLowerCase();
}

const userSchema = mongoose.Schema({
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

userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError') {
    next(new Error('A Mongo DB error occured'));
  } else {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);