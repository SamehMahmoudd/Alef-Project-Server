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

module.exports = bookModel;