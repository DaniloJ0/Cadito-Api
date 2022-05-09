const mongoose= require('mongoose');

const { Schema, model } = mongoose;

const historySchema = new Schema({
  created: { type: Date, default: Date.now },
  user_id: { type: Schema.Types.ObjectId, required: true},
  items: [{
    _id: { type: Schema.Types.ObjectId, required: true },
    product_id: { type: Schema.Types.ObjectId, required: true },
  }],
});

module.exports = model('History', historySchema);