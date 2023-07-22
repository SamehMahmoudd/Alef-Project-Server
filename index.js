const mongoose = require('mongoose')
const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors')
dotenv.config();

const { extractUser } = require('./middleware/middleware');

const app = express()

const usersRouter = require('./routers/usersRouter')
const authRouter = require('./routers/authRouter')
const ordersRouter = require('./routers/ordersRouter');
const booksRouter = require('./routers/booksRouter');
const authorsRouter = require('./routers/authorsRouter');
const categoryRouter = require('./routers/categoryRouter')
const filterRouter = require('./routers/filterRouter');
const reviewRouter = require('./routers/reviewRouter');


app.use(express.json())
app.use(cors())

app.use('/categories', categoryRouter);
app.use('/users', extractUser , usersRouter);
app.use('/auth', authRouter);
app.use('/orders',  ordersRouter);
app.use('/authors',  authorsRouter);
app.use('/books',  booksRouter);
app.use('/filter', filterRouter);
app.use('/review', reviewRouter);



//-----USING MULTER TO UPLOAD FILES-----//
const uploadRoutes = require('./routers/upload');
app.use('/upload', uploadRoutes);
require('dotenv').config();
//------------------------------------dy-//


var connectionString = 'mongodb+srv://ellol:vqnWuRTZlgZ7HhR4@alef-cluster.xt2vp4y.mongodb.net/alef-database';
mongoose.connect(connectionString).then(() => {
      console.log('Connected to MongoDB Atlas successfully');
}).catch((error) => console.error(error));


// Start the server
const port = 3001;
app.listen(port, () => {
      console.log(`Server started successfully on port ${port}`);
});
