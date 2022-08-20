import React, {useState} from "react";
import {AdminButton, ItemContainer} from "../styles";
import {articleType, bannerType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {RemovingForm} from "../RemovingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {AddingForm} from "./AddingForm";


type ArticleProps = {
    article:articleType,
    fetch:() => void
}

export const Article:React.FC<ArticleProps> = ({article,fetch}) =>{
    const [isOnRemoving,setIsOnRemoving] = useState(false);
    const [isOnEditing,setIsOnEditing] = useState(false);
    const {upload} = useDownloadFile();

    const onConfirmRemove = async () =>{
        await axios.delete('/article/remove/'+article._id)
        fetch();
        onBlurRemoving();
    }
    const onRemoving = () =>{
        setIsOnRemoving(true);
    }
    const onBlurRemoving = () =>{
        setIsOnRemoving(false);
        document.body.style.overflow = "unset";
    }
    const toggle = async () =>{
        try{
            await axios.patch('/article/toggle/'+article._id);
            fetch();
        }catch(err){
            console.log("article toggle err",err);
        }
    }
    const onEditing = () =>{
        setIsOnEditing(true);
    }
    const onBlurEditing = () =>{
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }
    const onConfirmEdit = async (item:Partial<articleType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.patch('/article/edit/'+article._id, {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("article edit err",err);
        }
        fetch();
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }

    return <ItemContainer>
        {isOnEditing && <Modal><AddingForm onConfirm={onConfirmEdit} onBlur={onBlurEditing} initialState={article}/></Modal>}
        {isOnRemoving && <Modal><RemovingForm onConfirm={onConfirmRemove} onBlur={onBlurRemoving}/></Modal>}
        <span>type: {article.type}</span>
        <span>imageUrl: {article.imageUrl}</span>
        <span>title: {article.title}</span>
        <span>isChosen: {article.isChosen}</span>
        <AdminButton>
            {article.isChosen ? <button onClick={toggle}>Cancel</button> :<button onClick={toggle}>Choose</button>}
            <button onClick={onEditing}>Edit</button>

            <button onClick={onRemoving}>Remove</button>

        </AdminButton>
    </ItemContainer>
}