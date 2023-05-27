
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Models
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors')
dotenv.config(); 

const usersRouter  = require('./routers/usersRouter')
const authRouter = require('./routers/authRouter')
const ordersRouter = require('./routers/ordersRouter');

const { extractUser } = require('./middleware');

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users',usersRouter)
app.use('/auth', authRouter)
app.use('/orders', extractUser, ordersRouter)

var connectionString = 'mongodb+srv://ellol:vqnWuRTZlgZ7HhR4@alef-cluster.xt2vp4y.mongodb.net/alef-database';
mongoose.connect(connectionString).then(() => {
      console.log('Connected to MongoDB Atlas successfully');
}).catch((error) => console.error(error));

app.listen(3001,()=>{
console.log('Server started successfully');
})
