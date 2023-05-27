const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Models
const users = require('./models/user');
const books = require('./models/book');
const orders = require('./models/order');
const authors = require('./models/author');


const AuthorRoutes = require('./Routes/authRouter');
// const BookRoutes = require('./Routes/BooksRoute');

//middleware
app.use(express.json())

var connectionString = 'mongodb+srv://ellol:vqnWuRTZlgZ7HhR4@alef-cluster.xt2vp4y.mongodb.net/alef-database';
mongoose.connect(connectionString).then(() => {
      console.log('Connected to MongoDB Atlas successfully');
}).catch((error) => console.error(error));


//Routes
app.use("/author" , AuthorRoutes);
// app.use("/book" , BookRoutes);

app.listen(3001,()=>{
console.log('Server started successfully @ port 3001');
})