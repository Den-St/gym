import ReviewModel from "../models/Review.js";

export const create = async (req,res) =>{
    try{
        console.log(req.body);
        const doc = new ReviewModel({
            type:req.body.type,
            authorName:req.body.authorName,
            title:req.body.title,
            jarUrl:req.body.jarUrl,
            description:req.body.description,
        });
        const review = await doc.save();
        res.json(review);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("review create err",err)
    }
};

export const edit = async (req,res) =>{
    try{
        const id =  req.params.id;
        await ReviewModel.updateOne({
                _id:id
            },
            {
                type:req.body.type,
                authorName:req.body.authorName,
                title:req.body.title,
                jarUrl:req.body.jarUrl,
                description:req.body.description,
            })
        res.json({
            success:true,
        })}
    catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("review edit err",err)
    }
}

export const remove = (req,res) =>{
    try{
        const id = req.params.id;
        ReviewModel.findOneAndDelete(
            {
                _id:id,
            },
            (err,doc)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message:'Не удалось удалить review'
                    });
                }
                if(!doc){
                    console.log("doc: ",doc);
                    return res.status(404).json({
                        message:'review не найден'
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
        console.log("review remove err",err)
    }
}

export const toggle = async (req,res) =>{
    try{
        const id =  req.params.id;
        const prev = await ReviewModel.findById(id);
        const prevIsChosen = prev.isChosen;
        await ReviewModel.updateOne({
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
        console.log("article toggle err",err)
    }
}

export const get = async (req,res) =>{
    try{
        const all = await ReviewModel.find();
        res.json(all);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("review get err",err)
    }
}