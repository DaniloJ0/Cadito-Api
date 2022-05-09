const mongoose = require('mongoose');
const Cart = require('../models/cart_model')
const History = require('../models/histories_model');


const GetCart = async (req, res) => {
  const { user_id } = req.query;
  try {
    const cart = await Cart.findOne({ user_id }) ?? await Cart.create({ user_id });
    return res.status(200).json(cart.items);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
  
const AddCart = async (req, res) => {
    const { product_id, user_id } = req.body;
    const newItem = {
      _id: new mongoose.Types.ObjectId(),
      product_id,
    };
    try {
      const cart = await Cart.findOneAndUpdate(
        { user_id },
        { $push: { items: newItem } },
        { new: true, upsert: true },
      );
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
  
 const RemoveCart = async (req, res) => {
    const{ item_id } = req.query;
    try {
      const cart = await Cart.findOneAndUpdate(
        { 'items._id': item_id },
        { $pull: { items: { _id: item_id } } },
        { new: true },
      );
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
  
const PurchaseCart = async (req, res) => {
    const { user_id } = req.body;
    try {
      const cart = await Cart.findOne({ user_id });
      await History.create({
        user_id,
        items: cart.items,
      });
      cart.items = [];
      await cart.save();
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };


module.exports = {GetCart, AddCart, RemoveCart, PurchaseCart};














