const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  urlId: { type: mongoose.Schema.Types.ObjectId, ref: 'URL' },
  timestamp: { type: Date, default: Date.now },
  userAgent: { type: String },
  ipAddress: { type: String },
  osType: { type: String },
  deviceType: { type: String },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
