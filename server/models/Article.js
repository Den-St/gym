import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    type:String,
    imageUrl:String,
    title:String,
    isChosen:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model('Article',ArticleSchema);