const { findById } = require("./Model");
const Product=require("./Model");
const Apifeature=require("./ApiFeature")

exports.createProduct=async(req,res,next)=>{
    
    const product = await Product.create(req.body).then((product)=>{
        res.status(201).json({
            success:true,
            product
        })
    }).catch((err)=>{ 
        res.status(500).json({
            success:false,
            message:`some fildse missing${err}`
        })
    })
    
}
// get all product
exports.getAllProducts=async(req,res)=>{
    

    const resultPerPage=3;
    const productCount=await Product.countDocuments();

    const apiFeature=new Apifeature(Product.find(),req.query)
    let  productss=  apiFeature.query
    let filterdProductCount=productss.length;

    apiFeature.pagination(resultPerPage)
    const products=await apiFeature.query.then((products)=>{
        
        res.status(200).json({
            success:true,
            products,
    })
    }).catch(()=>{
        res.status(500).json({
            success:false
    })
})
}
exports.addProduct=async(req,res,next)=>{
    
    const product=await Product.findById(req.params.id)
    //rev=>rev.user.toString =user id inside all reviess is equle to letest user id
    console.log(req.params.id)
    if(product){
        product.reviews.push(review)

    }
    else{
       console.log("id not found")
    }

    
}
