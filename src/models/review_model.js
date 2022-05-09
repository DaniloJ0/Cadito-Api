const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const reviewSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, required: true},
    product_id: { type: Schema.Types.ObjectId, required: true},
    rating: { type: Number, required: true },
    description: { type: String, required: true },
  });

module.exports = model('Review', reviewSchema);

