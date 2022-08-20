import express from "express";
import mongoose from "mongoose";
import {BannerController,ArticleController,FeaturedController,ProductController,ReviewController,SocialMediaPictureController,UserController} from "./actions/index.js";
import multer from "multer";
import cors from "cors";
import {generateFileName} from "./utils.js";
import checkAuth from "./utils.js";

mongoose
    .connect("mongodb+srv://Denis:den0677164955@cluster0.cppu1ku.mongodb.net/test")
    .then(() => console.log("DB ok"))
    .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
const storage = multer.diskStorage({
   destination: (_,__,cb) =>{
      cb(null,'uploads');
   },
   filename:(_,file,cb) => {
      cb(null,generateFileName(file.originalname))
   },
})

const upload = multer({storage})
app.get('/',(req,res) => {
   res.send('Hello World');
});
app.use(cors());
app.use('/uploads',express.static('uploads'))
app.post('/upload',upload.single('image'),(req,res) => {
   console.log("body",req.file)
   res.json({
      url:`http://localhost:8888/uploads/${req.file.filename}`
   })
});
app.listen(8888,(err) => {
   if(err){
      return console.log("err");
   }
   console.log('Server OK');
})

app.post('/auth/login',UserController.login);
app.post('/auth/register',UserController.register);
app.get('/auth/me',checkAuth,UserController.getMe);

app.post("/banner/create",BannerController.create);
app.delete("/banner/remove/:id",BannerController.remove);
app.patch("/banner/edit/:id",BannerController.edit);
app.patch("/banner/toggle/:id",BannerController.toggle);
app.get("/banner/get",BannerController.get);

app.post("/article/create",ArticleController.create);
app.delete("/article/remove/:id",ArticleController.remove);
app.patch("/article/edit/:id",ArticleController.edit);
app.patch("/article/toggle/:id",ArticleController.toggle);
app.get("/article/get",ArticleController.get);


app.post("/featured/create",FeaturedController.create);
app.delete("/featured/remove/:id",FeaturedController.remove);
app.patch("/featured/edit/:id",FeaturedController.edit);
app.patch("/featured/toggle/:id",FeaturedController.toggle);
app.get("/featured/get",FeaturedController.get);


app.post("/product/create",ProductController.create);
app.delete("/product/remove/:id",ProductController.remove);
app.patch("/product/edit/:id",ProductController.edit);
app.patch("/product/toggle/:id",ProductController.toggle);
app.get("/product/get",ProductController.get);
app.get("/product/getOne/:id",ProductController.getOne);


app.post("/review/create",ReviewController.create);
app.delete("/review/remove/:id",ReviewController.remove);
app.patch("/review/edit/:id",ReviewController.edit);
app.patch("/review/toggle/:id",ReviewController.toggle);
app.get("/review/get",ReviewController.get);


app.post("/socialmedia/create",SocialMediaPictureController.create);
app.delete("/socialmedia/remove/:id",SocialMediaPictureController.remove);
app.patch("/socialmedia/edit/:id",SocialMediaPictureController.edit);
app.patch("/socialmedia/toggle/:id",SocialMediaPictureController.toggle);
app.get("/socialmedia/get",SocialMediaPictureController.get);

