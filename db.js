const mongoose = require('mongoose');



const mongoConnectionApi = 'mongodb://127.0.0.1:27017/notes';
mongoose.connect(mongoConnectionApi,{});

const db = mongoose.connection;


db.on('connected',()=>{
    console.log('connected to database');
});

db.on('error',(error)=>{
    console.log(`error connected to ${error}`);
});

db.on('reconnected',()=>{
    console.log('reconnected  to database');
});

module.exports = db;