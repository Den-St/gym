import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
    title:{type:String},
    subTitle:{type:String},
    buttonText:{type:String},
    imageUrl:{type:String},
    isChosen:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model('Banner',BannerSchema);