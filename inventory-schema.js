const mongoose=require('mongoose');

const invetnoryschema=new mongoose.Schema({
   
    inventory_id:{type:String},
    inventory_type:{type:String},
    item_name:{type:String},
    available_quantity:{type:Number}
})
const inventorymodel=mongoose.model("inventorymodel",invetnoryschema)
module.exports=inventorymodel