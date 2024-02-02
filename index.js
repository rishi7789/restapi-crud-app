//In this project we will create restful api and we will do CRUD operations on it

const express=require("express")
require("./database/connect")
const MensRanking=require("./models/mens")
const router=require("./routers/route")

const app=express(); 
const port=process.env.PORT || 3000;

app.use(express.json())

app.use(router);

app.listen(port,()=>{
    console.log("server running at port 3000");
})


//crud
//create- to add data to our database(POST)
//read- to read data from database(GET)
//update- to update data in database(PUT,PATCH)
//delete -to delete data from database(DELETE)
