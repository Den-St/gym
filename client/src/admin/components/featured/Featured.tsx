import React, {useState} from "react";
import {bannerType, featuredType} from "../../../types";
import {AdminButton, ItemContainer} from "../styles";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {RemovingForm} from "../RemovingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {AddingForm} from "./AddingForm";


type FeaturedProps = {
    featured:featuredType,
    fetch:() => void
}

export const Featured:React.FC<FeaturedProps> = ({featured,fetch}) =>{
    const [isOnRemoving,setIsOnRemoving] = useState(false);
    const [isOnEditing,setIsOnEditing] = useState(false);
    const {upload} = useDownloadFile();

    const onConfirmRemove = async () =>{
        await axios.delete('/featured/remove/'+featured._id)
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
            await axios.patch('/featured/toggle/'+featured._id);
            fetch();
        }catch(err){
            console.log("featured toggle err",err);
        }
    }
    const onEditing = () =>{
        setIsOnEditing(true);
    }
    const onBlurEditing = () =>{
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }
    const onConfirmEdit = async (item:Partial<featuredType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.patch('/featured/edit/'+featured._id, {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("featured edit err",err);
        }
        fetch();
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }

    return <ItemContainer>
        {isOnEditing && <Modal><AddingForm onConfirm={onConfirmEdit} onBlur={onBlurEditing} initialState={featured}/></Modal>}
        {isOnRemoving && <Modal><RemovingForm onConfirm={onConfirmRemove} onBlur={onBlurRemoving}/></Modal>}
        <span>imageUrl: {featured.imageUrl}</span>
        <span>isChosen: {featured.isChosen}</span>
        <AdminButton>
            {featured.isChosen ? <button onClick={toggle}>Cancel</button> :<button onClick={toggle}>Choose</button>}
            <button onClick={onEditing}>Edit</button>

            <button onClick={onRemoving}>Remove</button>

        </AdminButton>
    </ItemContainer>
}