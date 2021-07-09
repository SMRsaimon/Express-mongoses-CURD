const express = require("express");
const router = express.Router();
const mongoose=require("mongoose")

const curdSchema=require("../../Schemas/curdSchema")

const Curd= new mongoose.model("curd", curdSchema)




// get all data
router.get("/getAll", async (re, res) => {

    res.send("done")

});

// get One data by ID

router.get("/:id", async (req, res) => {});

// store one data in database

router.post("/storeOne", async (req, res) => {

    const addSingleData= new Curd( req.body)

     await addSingleData.save(err=>{


        if(err){

            res.status(500).send("data insert fail ")

            
        }else{
         res.status(200).send("data insert successfully  ")
           
        }
     })

});

// store multiple data in database

router.post("/storeAll", async (req, res) => {});

// update one  data

router.put("/update/:id", async (req, res) => {});

// delete data
router.delete("/delete/:id", async (req, res) => {});

module.exports = router;
