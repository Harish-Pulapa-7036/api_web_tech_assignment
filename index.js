const mongoose=require('mongoose')
const router=require('./router')
const express=require('express')
const app=express();
app.use('/',router)
mongoose.connect('mongodb://localhost/api_web_tech_assignment',()=>{
    console.log("connected to DB");
})
app.listen(3005,()=>{
    console.log("listening 3005 port");
})