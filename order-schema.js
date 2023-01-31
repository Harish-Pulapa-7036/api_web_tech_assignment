const mongoose=require('mongoose');

const orderschema=new mongoose.Schema({
    customer_id:{type:String},
    inventory_id:{type:String},
    item_name:{type:String},
    quantity:{type:Number}
})
const ordermodel=mongoose.model("ordermodel",orderschema)
module.exports=ordermodel