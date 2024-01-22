const express=require("express");
const router=express.Router();
//get
router.get("/todos",(req,res)=>{
    res.status(200).json({mssg:"Get request to /api/todos"})
});
//put
router.post("/todos",(req,res)=>{
    res.status(201).json({mssg:"Post request to /api/todos"})

});
//delete/todo/:id
router.delete("/todos/:id",(req,res)=>{
    res.status(200).json({mssg:"Delete request to /api/todos/:id"})
});
//put/todo/:id
router.put("/todos/:id",(req,res)=>{
    res.status(200).json({mssg:"Put request to /api/todos/:id"})
});
module.exports=router