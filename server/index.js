const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/key')

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(config.ATLAS_URI,{useUnifiedTopology:true,useCreateIndex:true,useNewUrlParser:true});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to MongoDB database has been successfully established.")
}).catch(err => console.error(err));



const userRouter = require('./routes/users');
const favouriteRouter = require('./routes/favourites')

app.use('/api/user', userRouter);
app.use('/api/favourites' , favouriteRouter)


const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server is listening at port ${port}`)

});
