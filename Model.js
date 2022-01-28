const mongoose = require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true

    },

    Images:[
        {
        public_Id:{
            type:String,
            required:true
        },

    }
    ],
})

module.exports=mongoose.model("products",productSchema);