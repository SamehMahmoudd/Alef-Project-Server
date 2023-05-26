const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true,
      },
      bookPages: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      publishedYear: {
        type: Number,
        required: true,
      },
      shipping: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      returnPolicy: {
        type: String,
      },
      stock: {
        type: Number,
        required: true,
        default:2
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
      },
},{timestamps:true});

const bookModel = mongoose.model('Book', bookSchema);

bookModel.create({
    bookTitle: 'The End v3 with auther',
    bookPages: 120,
    price: 200.3,
    publishedYear: 2019,
    shipping: 'Shipping Cairo - Giza 3 Days',
    description: 'Description',
    returnPolicy: 'No returns or Exchange for Books & Printed',
    stock: 2,
    author: '646f8946ace9f19b147b7950',
    });



module.exports = bookModel;

