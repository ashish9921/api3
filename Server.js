const app=require("./App");

const connectdatabase=require("./database");



connectdatabase()


const server=app.listen(3000,()=>{
    console.log(`server is working on http://localhost:3000`)

})


