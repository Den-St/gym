import SocialMediaPictureModel from "../models/SocialMediaPicture.js";

export const create = async (req,res) =>{
    try{
        console.log(req.body);
        const doc = new SocialMediaPictureModel({
            imageUrl:req.body.imageUrl
        });
        const media = await doc.save();
        res.json(media);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("socialmedia create err",err)
    }
};

export const edit = async (req,res) =>{
    try{
        const id =  req.params.id;
        await SocialMediaPictureModel.updateOne({
                _id:id
            },
            {
                imageUrl:req.body.imageUrl
            })
        res.json({
            success:true,
        })}
    catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("socialmedia edit err",err)
    }
}

export const remove = (req,res) =>{
    try{
        const id = req.params.id;
        SocialMediaPictureModel.findOneAndDelete(
            {
                _id:id,
            },
            (err,doc)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:'Не удалось удалить socialmedia'
                    });
                }
                if(!doc){
                    console.log("doc: ",doc);
                    return res.status(404).json({
                        message:'socialmedia не найден'
                    });
                }
                res.json({
                    success:true,
                });
            }
        );
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("socialmedia remove err",err)
    }
}

export const toggle = async (req,res) =>{
    try{
        const id =  req.params.id;
        const prev = await SocialMediaPictureModel.findById(id);
        const prevIsChosen = prev.isChosen;
        await SocialMediaPictureModel.updateOne({
                _id:id
            },
            {
                isChosen:!prevIsChosen
            })
        res.json({
            success:true,
        })}
    catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("socialmedia toggle err",err)
    }
}

export const get = async (req,res) =>{
    try{
        const all = await SocialMediaPictureModel.find();
        res.json(all);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("socialmedia get err",err)
    }
}