const mongoose=require("mongoose")

//schemas are structure/model of aur database collection
const mensSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true  
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
})

//we are creating a new collection/model
const MensRanking=new mongoose.model("MenRanking",mensSchema)

module.exports=MensRanking;