const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bookRouter = require("./Routes/BooksRoute");
// const users = require('./models/user')
// const books = require('./models/book')
// const orders = require('./models/order')
// const authers = require('./models/auther')

var connectionString =
  "mongodb+srv://ellol:vqnWuRTZlgZ7HhR4@alef-cluster.xt2vp4y.mongodb.net/alef-database";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully");
  })
  .catch((error) => console.error(error));

app.listen(3001, () => {
  console.log("Server started successfully");
});
app.use(express.json())
app.use("/books", bookRouter);
