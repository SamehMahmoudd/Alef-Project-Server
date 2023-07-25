const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId,
    ref: "users",  
  },

  totalPrice: {type: Number,required: true },
  status: { type: String, required: true },
  address: { type: String,  required: true },
  items: [
    {
      book:{
         bookImage: { type: String },
         bookTitle: { type: String  },
         price: { type: Number },
      },
      
      quantity:     { type: Number },
    },
  ],
  paymentMethod:{
    type:String, required:true
  }
});
  
const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;