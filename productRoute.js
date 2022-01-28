const express=require("express");
const { createProduct, getAllProducts, addProduct } = require("./controle");


const router=express.Router();
router.route("/product").post(createProduct);
router.route("/data").get(getAllProducts);
router.route("/AData").put(addProduct);
module.exports=router