const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: 
  { type: String,
     required: true 
    },
  email: 
  { type: String,
     required: true, 
     unique: true 
    },
  googleId:
   { 
    type: String,
     required: true 
    },
  isVerified: { type: Boolean, default: true },
  Urls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'URL' }],
  analytics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Analytics' }],
});

module.exports = mongoose.model('User', userSchema);

