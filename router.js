const router=require('express').Router();
const customermodel=require('./customer-schema');
const inventorymodel=require('./inventory-schema');
const ordermodel=require('./order-schema')
const bodyparser=require('body-parser')
router.use(bodyparser.json())
router.post("/createOrders",async(req,res)=>{
    try{
        // console.log(req.body);
        let data= await ordermodel.create(req.body)
        return res.json({
            status:"success",
            orders:data
        })
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})
router.post("/createInventory",async(req,res)=>{
    try{
        
        let data= await inventorymodel.create(req.body)
        return res.json({
            status:"success",
            inventories:data
        })
        // res.send("ok")
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})
router.post("/createCustomer",async(req,res)=>{
    try{
        
        let data= await customermodel.create(req.body)
        return res.json({
            status:"success",
            customer:data
        })
        
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})

router.get("/orders",async(req,res)=>{
    try{
        
        let data= await ordermodel.find()
        return res.json({
            status:"success",
            orders:data
        })
        
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})

router.get("/inventory",async(req,res)=>{
    try{
        
        let data= await inventorymodel.find()
        return res.json({
            status:"success",
            inventories:data
        })
        
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})
router.get("/inventory/:inventoryType",async(req,res)=>{
    try{
        
        let data= await inventorymodel.find({inventory_type:req.params.inventoryType})
        return res.json({
            status:"success",
            inventoriestype:data
        })
        
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})

router.get("/customerDetails",async(req,res)=>{
    try{
        
        let data= await customermodel.find()
        return res.json({
            status:"success",
            customerdetails:data
        })
        
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})

router.put("/:itemName/:availableQuantity",async(req,res)=>{
    try{
       
        let data= await ordermodel.findOne({item_name:req.params.itemName})
        let quantity=data.quantity;
        let avail=await inventorymodel.findOne({item_name:req.params.itemName});
      
        if(avail.available_quantity < quantity ||  avail.available_quantity==0 ){
            return res.json({
                message:"ITEM IS OUT OF STOCK"
            })
        }
       
        let available_quantity=await inventorymodel.updateOne({item_name:req.params.itemName},{$set:{available_quantity:parseInt(req.params.availableQuantity)-quantity}})
        return res.json({
            status:"success",
            available_quantity:available_quantity
        })
       
        
    }
    catch(e){
        return res.json({
            status:"failed",
            message:e.message
        })
    }
  

})






module.exports=router