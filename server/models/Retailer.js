const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Retailer schema definition

const RetailerSchema = new Schema(
  {
    name: { type: String, required: true},
    createdAt: { type: Date, default: Date.now},
  },
  {
    versionKey: false
  }
);

// Sts the createdAt parameter to thw current timeout

RetailerSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// Exports the RetailerSchema for use elsewhere
module.exports = mongoose.model('Retailer', RetailerSchema);
