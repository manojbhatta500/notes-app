const userModel = require('../models/userModel');



async function signUp (req,res){
    // check for existing user 
    // hash password 
    // create an user 
    // token generation 
    // will take ma around maybe 30 min
}


async function logIn(req,res){
    // check if user exist
    // check authentication 
    // if success then  give token  
    // if authentication   fail send  statuscode with json in the task 
}

module.exports = {
    signUp,
    logIn
}