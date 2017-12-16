var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    match: [/.+\@.+..+/, 'Please fill a valid email'],
    unique: true,
    require: "Email is required"
  },
  username: {
    type: String,
    unique: true,
    trim: true,
    require: 'Username is required'
  },
  password: {
    type: String,
    require: 'Password is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  salt: {
    type: String
  }

});



// Use a pre-save middleware to hash the password
UserSchema.pre('save', function(next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});

// Create an instance method for hashing a password
UserSchema.methods.hashPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

// Create an instance method for authenticating user
UserSchema.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};


UserSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

module.exports = mongoose.model('User', UserSchema);
