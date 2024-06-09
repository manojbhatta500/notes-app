const express = require('express');


const router = express.Router();

router.get('/',(req,res)=>{
    console.log('this is the notes get method');
});

router.post('/',(req,res)=>{
    console.log('this is the notes post method');
});

module.exports = router;