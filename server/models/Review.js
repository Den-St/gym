import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    type:String,
    authorName:String,
    title:String,
    jarUrl:String,
    description:String,
    numberOfStars:Number,
    isChosen:{
        type:Boolean,
        default:false
    }
    },
    {
        timestamps: true
});

export default mongoose.model('Review',ReviewSchema);