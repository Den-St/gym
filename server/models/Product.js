import  mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    manUrl:String,
    jar1Url:String,
    jar2Url:String,
    buttonText:String,
    description:String,
    name:String,
    type:{
        type:String,
        default: ""
    },
    isChosen:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model('Product',ProductSchema);