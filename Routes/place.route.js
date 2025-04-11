const express = require('express');

const router = express.Router();


router.get("/showvehicles", (req,res)=>{
    return res.send("Car has been shown")
})


module.exports = router;