const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      password: {
        type: String,
      },
      address: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      country:{
        type: String,
        required:true,
      },
      subscribe:{
        type: String,
      },
      orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }],
      cart: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Book'
        },
        quantity: {
          type: Number,
          default: 1
        }
      }]
},{timestamps:true});

var userModel = mongoose.model('users', userSchema);

userModel.create({
  firstName: "alaa",
  lastName: "ellol",
  email: "alaaEllol@example.com",
  phoneNumber: "0123456789",
  password: "123456",
  address: "Alaa Mostafa",
  image: "https://i.ibb.co/VsgvzJ6/lol.jpg",
  country: "Egypt",
  subscribe: "false",
  orders: [
    '646128d106162fc6822ede4d', 
  ],
  cart: [{
    productId: '646128d106162fc6822ede4d', 
    quantity: 2
    }],
});
module.exports = userModel;


