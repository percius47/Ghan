 require('dotenv').config();
const express = require('express');
const app= express();
const connectDB=require('./db/connect');
const PORT=process.env.PORT||3000;


const item_routes=require("./routes/items")

app.get ("/",(req,res)=>{
    res.send("Hello");
});
app.use("/api/items",item_routes);



const start =async ()=>{
try{
    await connectDB(process.env.MONGODB_URL);
app.listen(PORT,()=>{
   console.log(`Runing on port ${PORT}`);
});

}
catch(error){
    console.log(error);
}

}

start();