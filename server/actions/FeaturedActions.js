import FeaturedModel from "../models/Featured.js";

export const create = async (req,res) =>{
    try{
        const doc = new FeaturedModel({
            imageUrl:req.body.imageUrl
        });
        const featured = await doc.save();
        res.json(featured);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("featured create err",err)
    }
};

export const edit = async (req,res) =>{
    try{
        const id =  req.params.id;
        await FeaturedModel.updateOne({
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
        console.log("featured edit err",err)
    }
}

export const remove = (req,res) =>{
    try{
        const id = req.params.id;
        FeaturedModel.findOneAndDelete(
            {
                _id:id,
            },
            (err,doc)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:'Не удалось удалить featured'
                    });
                }
                if(!doc){
                    console.log("doc: ",doc);
                    return res.status(404).json({
                        message:'featured не найден'
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
        console.log("featured remove err",err)
    }
}

export const toggle = async (req,res) =>{
    try{
        const id =  req.params.id;
        const prev = await FeaturedModel.findById(id);
        const prevIsChosen = prev.isChosen;
        await FeaturedModel.updateOne({
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
        console.log("featured toggle err",err)
    }
}

export const get = async (req,res) =>{
    try{
        const all = await FeaturedModel.find();
        res.json(all);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("featured get err",err)
    }
}