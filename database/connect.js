const mongoose=require("mongoose")

mongoose.connect(
    "mongodb://localhost:27017/olympics"
).then(()=>{
    console.log("Connection successfull");
}).catch((err)=>{
    console.log(err);
})