export const generateFileName = (fName) => {
    const ext = fName.split('.')[1];
    const formated = fName.split('.')[0].replaceAll(' ', '_');
    const name = formated.length > 4 ? formated.slice(0, 4) : formated;
    console.log("fname",`${name}${new Date().getTime()}.${ext}`);
    return `${name}${new Date().getTime()}.${ext}`;
}

import jwt from "jsonwebtoken";

export default (req,res,next) =>{
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'');

    if(token){
        try{
            const decoded = jwt.verify(token,'secret123');
            req.userId = decoded._id;
            next();
        }catch(err){
            return res.status(403).json({
                message:'Нет доступа.',
            });
        }
    }else{
        return res.status(403).json({
            message:'Нет доступа.',
        });
    }
};