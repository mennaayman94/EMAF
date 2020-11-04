const mongoose = require('mongoose');
const express=require('express')
const{DB_HOST,PORT,LINK}=require("./configuration")
const app=express()
mongoose.connect(DB_HOST,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
if (err){
    console.error(err)
    process.exit()
}
console.log("Connected Successfully to Database")
app.listen( PORT,()=>{
        console.log('server listening on port ' + PORT +' at '+LINK)
    })
})

module.exports= app;