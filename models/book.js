const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
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
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 50,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
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
    },
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
