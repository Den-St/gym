import mongoose from "mongoose";

const SocialMediaPictureScheme = new mongoose.Schema({
    imageUrl:String,
    isChosen:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model('SocialMediaPicture',SocialMediaPictureScheme);