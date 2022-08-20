import mongoose from "mongoose";

const User = new mongoose.Schema({
    passwordHash:{
        type:String,
        required:true,
    },
    login:{
        type:String,
        required:true,
    }
});

export default mongoose.model('User',User);