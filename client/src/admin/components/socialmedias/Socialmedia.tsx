import React, {useState} from "react";
import {AdminButton, ItemContainer} from "../styles";
import {articleType, bannerType, socialmediaType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {RemovingForm} from "../RemovingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {AddingForm} from "./AddingForm";

type SocialmediaProps = {
    socialmedia:socialmediaType,
    fetch:() => void
}

export const Socialmedia:React.FC<SocialmediaProps> = ({socialmedia,fetch}) =>{
    const [isOnRemoving,setIsOnRemoving] = useState(false);
    const [isOnEditing,setIsOnEditing] = useState(false);
    const {upload} = useDownloadFile();

    const onConfirmRemove = async () =>{
        await axios.delete('/socialmedia/remove/'+socialmedia._id)
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
            await axios.patch('/socialmedia/toggle/'+socialmedia._id);
            fetch();
        }catch(err){
            console.log("socialmedia toggle err",err);
        }
    }
    const onEditing = () =>{
        setIsOnEditing(true);
    }
    const onBlurEditing = () =>{
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }
    const onConfirmEdit = async (item:Partial<socialmediaType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.patch('/socialmedia/edit/'+socialmedia._id, {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("socialmedia edit err",err);
        }
        fetch();
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }

    return <ItemContainer>
        {isOnEditing && <Modal><AddingForm onConfirm={onConfirmEdit} onBlur={onBlurEditing} initialState={socialmedia}/></Modal>}
        {isOnRemoving && <Modal><RemovingForm onConfirm={onConfirmRemove} onBlur={onBlurRemoving}/></Modal>}
        <span>imageUrl:{socialmedia.imageUrl}</span>
        <span>isChosen:{socialmedia.isChosen}</span>
        <AdminButton>
            {socialmedia.isChosen ? <button onClick={toggle}>Cancel</button> :<button onClick={toggle}>Choose</button>}
            <button onClick={onEditing}>Edit</button>
            <button onClick={onRemoving}>Remove</button>
        </AdminButton>
    </ItemContainer>
}