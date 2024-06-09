const  mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.type.ObjectId,
        ref: UserModel,
        required:true
    }
},{timestamps:true});


const noteModel = mongoose.model('NoteModel',noteSchema);

module.exports = noteModel;