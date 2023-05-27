const bookModel = require("../models/book");

function getAllBooks() {
  return bookModel.find();
}

function getBookByID(id) {
  return bookModel.findOne({ _id: id });
}

function createNewBook(book) {
  return bookModel.create(book);
}

function updateBook(id, updates) {
  return bookModel.updateOne({ _id: id }, { $set: updates });
}

function deleteBook(id) {
  return bookModel.deleteOne({ _id: id });
}


module.exports={getAllBooks,getBookByID,createNewBook,updateBook,deleteBook}