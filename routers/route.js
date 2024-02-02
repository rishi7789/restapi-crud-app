const express=require("express")
const router=new express.Router();
const MensRanking=require("../models/mens")


//handling post request-send data to database
router.post("/mens",async(req,res)=>{
     try{
       const addMensRecord= new MensRanking(req.body) 
       console.log(req.body);
     const insertMens= await addMensRecord.save(); 
     res.status(201).send(insertMens);
     }catch(err){
        res.status(400).send(err)
     }
})
//handling get req-read data from database
router.get("/mens",async(req,res)=>{
     try{
      const getMens=await MensRanking.find({});
      res.send(getMens);
     }catch(err){
        res.status(400).send(err)
     }
})

//read data for individuals
router.get("/mens/:id",async(req,res)=>{
     try{
        const _id=req.params.id;
      const getMen=await MensRanking.findById(_id);
      res.send(getMen);
     }catch(err){
        res.status(400).send(err)
     }
})

//handling patch req-to update data in database
router.patch("/mens/:id",async(req,res)=>{
     try{
        const _id=req.params.id;
      const updateMen=await MensRanking.findByIdAndUpdate(_id,req.body);
      res.send(updateMen);
     }catch(err){
        res.status(500).send(err)
     }
})

//handling delete req-to delete data from database
router.delete("/mens/:id",async(req,res)=>{
     try{
        const _id=req.params.id;
      const updateMen=await MensRanking.findByIdAndDelete(_id);
      res.send(updateMen);
     }catch(err){
        res.status(500).send(err)
     }
})

module.exports = router;
