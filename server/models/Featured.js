import mongoose from "mongoose";

const FeaturedSchema = new mongoose.Schema({
    imageUrl:String,
    isChosen:{
        type:Boolean,
        default:false
    }
})
export default mongoose.model('Featured',FeaturedSchema);