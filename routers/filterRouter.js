const express = require("express");
const router = express.Router();
const { getAllBooks } = require("../Controllers/bookControllers");



router.get("/", async(req, res) => {
    try{
        const { low, high, author,categoryId  } = req.query;
        // const books = await getAllBooks();
        const books = await getAllBooks();

        const filteredBooks = books.filter((book) => {
            return (
               (book.price >= low && book.price <= high) || 
               (book.author.name === author) ||
               (book.category === categoryId)
               );
          });
          if(filteredBooks.length > 0){
            res.json(filteredBooks);
          }else{
            res.json(books);
          }
        
    }
    catch(err){
        res.send(err)
    }
});

module.exports = router;
