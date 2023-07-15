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

  },
  bookImage: {
    type: String,


  },

  description: {
    type: String,
  },

  bookStock: {
    type: Number,
    required: true,
    default: 2
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },

  category: {
    type: String,
    required: true,

  },
  language: {
    type: String,

  },
  bookFormat: {
    type: String,
  }
}, { timestamps: true });

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
