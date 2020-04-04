const express =require('express');
const app =express();
const mongoose =require('mongoose')
const morgan =require("morgan") ;
const dotenv =require('dotenv')
dotenv.config()

//db 
mongoose
    .connect(
        process.env.MONGO_URI,
        { userNewUrlParser:true }
     )
.then(() => console.log('DB connected'))

mongoose.connection.on('error',err =>{
    console.log(`DB connection cconnection error ${err.message}`);
    
})

//bring in routes
const postRoutes =require('./routes/post');

//middleware
app.use(morgan("dev"));
app.use("/",postRoutes);

const port =process.env.PORT ||8080;
app.listen(port, ()=> {
    console.log(`A Node JS API is listenting on port:${port}`);
});