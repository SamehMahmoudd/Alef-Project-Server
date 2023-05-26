const mongoose = require('mongoose')
const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors')
const app = express()


// const users = require('./models/user')
// const books = require('./models/book')
// const orders = require('./models/order')
// const authers = require('./models/auther')
dotenv.config(); 



const usersRouter  = require('./routes/usersRouter')
const authRouter  = require('./routes/authRouter')

app.use(express.json())
app.use(cors())

app.use('/users',usersRouter)
app.use('/auth',authRouter)






var connectionString = 'mongodb+srv://ellol:vqnWuRTZlgZ7HhR4@alef-cluster.xt2vp4y.mongodb.net/alef-database';
mongoose.connect(connectionString).then(() => {
      console.log('Connected to MongoDB Atlas successfully');
}).catch((error) => console.error(error));


app.listen(3001,()=>{
console.log('Server started successfully');
})