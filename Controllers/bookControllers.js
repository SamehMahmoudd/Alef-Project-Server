const bookModel = require("../models/book");
const authorModel = require("../models/author");
const categoryModel = require("../models/category");

function getAllBooks() {
  return bookModel.find().populate("author", "name");
}

function getBookByID(id) {
  return bookModel.findOne({ _id: id });
}

function createNewBook(book) {
  const authorName = book.author;
  const categoryName = book.category;

  // Find the author document by name
  return authorModel
    .findOne({ name: authorName })
    .then(async function (author) {
      // If the author document exists, use its _id to create the book document
      if (author) {
        book.author = author._id;
        console.log(author);
      } else {
        // If the author document does not exist, create a new author document
        const newAuthor = await authorModel.create({ name: authorName });
        book.author = newAuthor._id;
        console.log("not author", book);
      }
    })
    .then(async function () {
      categoryModel
        .findOne({ name: categoryName })
        .then(async function (category) {
          // If the category document exists, use its _id to create the book document
          if (category) {
            book.category = category._id;
            console.log(category);
          } else {
            // If the category document does not exist, create a new author document
            const newCategory = await categoryModel.create({
              name: categoryName,
            });
            book.category = newCategory._id;
            console.log("not category", book);
          }
        });

      return bookModel.create(book);
    });
}

function updateBook(id, updates) {
  return bookModel.updateOne({ _id: id }, { $set: updates });
}

function deleteBook(id) {
  return bookModel.deleteOne({ _id: id });
}

module.exports = {
  getAllBooks,
  getBookByID,
  createNewBook,
  updateBook,
  deleteBook,
};
