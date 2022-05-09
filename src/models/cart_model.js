const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const cartSchema = new Schema({
  items: [
    {
      _id: { type: Schema.Types.ObjectId, required: true },
      product_id: { type: Schema.Types.ObjectId, required: true,
    },
    },
  ],
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
});

module.exports = model('Cart', cartSchema);

