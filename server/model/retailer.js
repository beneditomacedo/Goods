let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Retailer schema definition

let RetailerSchema = new Schema(
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
  if(!this.createdat) {
    this.createdAt = now;
  }
  next();
});

// Exports the RetailerSchema for use elsewhere
module.exports = mongoose.model('retailer', RetailerSchema);
