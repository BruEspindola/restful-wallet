const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  amount: Number,
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const wallet = mongoose.model('wallet', walletSchema);
module.exports = wallet;