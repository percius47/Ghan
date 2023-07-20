const Product= require("../models/product");



const getAllItems=async(req,res)=>{
 

    const {company,name,sort,select}=req.query;
    const queryObject={};

    if(company){
        queryObject.company={ $regex: company, $options: "i" };
    }
    if(name){
        queryObject.name={ $regex: name, $options: "i" };
    }
    let apiData=Product.find(queryObject);

    if(sort){
        let sortFix=sort.replace(",", " ");
        apiData=apiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.split(",").join(" ")
        apiData=apiData.select(selectFix);
    }

        let page=(req.query.page)>0?(req.query.page):1;
        let limit=req.query.limit|| 3;

        let skip= (page-1)*limit;
        apiData=apiData.skip(skip).limit(limit);

     const myData=await apiData;
    // console.log(JSON.stringify(myData));
    if(myData.length)
    res.status(200).json({myData,page: page,nBhits:myData.length}); 
    else
    res.status(204).send("No content");
}

const getAllItemsTesting=async(req,res)=>{
    res.status(200).json({msg:"I am test."}); 
}

module.exports={getAllItems,getAllItemsTesting};  