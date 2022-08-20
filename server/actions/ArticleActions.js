import ArticleModel from "../models/Article.js";

export const create = async (req,res) =>{
    try{
        console.log(req.body);
        const doc = new ArticleModel({
            type:req.body.type,
            imageUrl:req.body.imageUrl,
            title:req.body.title,
        });
        const article = await doc.save();
        res.json(article);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("article create err",err)
    }
};

export const edit = async (req,res) =>{
    try{
        const id =  req.params.id;
        await ArticleModel.updateOne({
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
        console.log("article edit err",err)
    }
}

export const remove = (req,res) =>{
    try{
        const id = req.params.id;
        ArticleModel.findOneAndDelete(
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
                        message:'article не найден'
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
        console.log("article remove err",err)
    }
}

export const toggle = async (req,res) =>{
    try{
        const id =  req.params.id;
        const prev = await ArticleModel.findById(id);
        const prevIsChosen = prev.isChosen;
        await ArticleModel.updateOne({
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
        const all = await ArticleModel.find();
        res.json(all);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("article get err",err)
    }
}
