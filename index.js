const express = require ('express');
require ('dotenv').config();
const mongoose= require ('mongoose');
const app = express();
const port = process.env.PORT || 3000
const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.oldc4b8.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri)
.then(()=>console.log("connected on database"))
.catch((error)=>console.log (error))



app.listen(port,()=>{
    console.log("CONECTED ON PORT", port)

})