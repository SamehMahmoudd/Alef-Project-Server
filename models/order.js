const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId,
    ref: "User",  
  },

  totalPrice: {type: Number, required: true,},
  status: { type: String, required: true,  },
  items: [
    {
      productImage: { type: String, required: true },
      productTitle: { type: String, required: true },
      productPrice: { type: Number, required: true },
      quantity:     { type: Number, required: true },
    },
  ],
});
  
const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;