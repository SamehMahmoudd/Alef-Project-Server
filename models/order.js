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
// const userId = new mongoose.Types.ObjectId();

orderModel.create({
    user: '64601df6792fe33feff1360a',
    totalPrice: 10003,
    status: 'pending',
    items: [
    {
        productImage: 'https://example.com/image1.jpg',
        productTitle: 'nodels',
        productPrice: 500,
        quantity: 2   
    },
]
});



module.exports = orderModel;

