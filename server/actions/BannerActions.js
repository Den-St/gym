import BannerModel from "../models/Banner.js";

export const create = async (req,res) =>{
    try{
        console.log(req.body);
        const doc = new BannerModel({
            title:req.body.title,
            subTitle:req.body.subTitle,
            buttonText:req.body.buttonText,
            imageUrl:req.body.imageUrl,
        });
        const banner = await doc.save();
        res.json(banner);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("banner create err",err)
    }
};

export const edit = async (req,res) =>{
    try{
        const id =  req.params.id;
        await BannerModel.updateOne({
                _id:id
            },
            {
                title:req.body.title,
                subTitle:req.body.subTitle,
                buttonText:req.body.buttonText,
                imageUrl:req.body.imageUrl,
            })
        res.json({
            success:true,
        })}
    catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("banner edit err",err)
    }
}

export const toggle = async (req,res) =>{
    try{
        const id =  req.params.id;
        const prev = await BannerModel.findById(id);
        const prevIsChosen = prev.isChosen;
        await BannerModel.updateOne({
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
        console.log("banner toggle err",err)
    }
}

export const remove = async (req,res) =>{
    try{
        const id = req.params.id;
        BannerModel.findOneAndDelete(
            {
                _id:id,
            },
            (err,doc)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:'Не удалось удалить banner'
                    });
                }
                if(!doc){
                    console.log("doc: ",doc);
                    return res.status(404).json({
                        message:'Banner не найден'
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
        console.log("banner remove err",err)
    }
}

export const get = async (req,res) =>{
    try{
        const all = await BannerModel.find();
        res.json(all);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("banner get err",err)
    }
}
