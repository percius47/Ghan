const Product= require("../models/product");



const getAllItems=async(req,res)=>{
 
     const myData=await Product.find({});
    // console.log(JSON.stringify(myData));
    res.status(200).json({myData}); 
}

const getAllItemsTesting=async(req,res)=>{
    res.status(200).json({msg:"I am test."}); 
}

module.exports={getAllItems,getAllItemsTesting};  