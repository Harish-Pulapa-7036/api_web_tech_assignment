const mongoose=require('mongoose');

const customerschema=new mongoose.Schema({
    customer_id:{type:String},
    customer_name:{type:String},
    email:{type:String,unique:true}
})
const customermodel=mongoose.model("customermodel",customerschema)
module.exports=customermodel