import ProductModel from "../models/Product.js";

export const create = async (req,res) =>{
    try{
        console.log(req.body);
        const doc = new ProductModel({
            manUrl:req.body.manUrl,
            jar1Url:req.body.jar1Url,
            jar2Url:req.body.jar2Url,
            buttonText:req.body.buttonText,
            description:req.body.description,
            name:req.body.name,
            type:req.body.type,
        });
        const product = await doc.save();
        res.json(product);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("product create err",err)
    }
};

export const edit = async (req,res) =>{
    try{
        const id =  req.params.id;
        await ProductModel.updateOne({
                _id:id
            },
            {
                name:req.body.name,
                manUrl:req.body.manUrl,
                jar1Url:req.body.jar1Url,
                jar2Url:req.body.jar2Url,
                buttonText:req.body.buttonText,
                descriptionText:req.body.descriptionText,
                type:req.body.type
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
        ProductModel.findOneAndDelete(
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
        console.log("product remove err",err)
    }
}

export const toggle = async (req,res) =>{
    try{
        const id =  req.params.id;
        const prev = await ProductModel.findById(id);
        const prevIsChosen = prev.isChosen;
        await ProductModel.updateOne({
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
        console.log("product toggle err",err)
    }
}

export const get = async (req,res) =>{
    try{
        const all = await ProductModel.find();
        res.json(all);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("product get err",err)
    }
}

export const getOne = async (req,res) =>{
    try{
        const one = await ProductModel.findById(req.params.id);
        res.json(one);
    }catch(err){
        res.status(500).json({
            message:err,
        })
        console.log("product getOne err",err)
    }
}