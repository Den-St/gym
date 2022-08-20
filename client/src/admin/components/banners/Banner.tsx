import React, {useState} from "react";
import {AdminButton, ItemContainer} from "../styles";
import {bannerType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {RemovingForm} from "../RemovingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {AddingForm} from "./AddingForm";


type BannerProps = {
    banner:bannerType,
    fetch:() => void
}

export const Banner:React.FC<BannerProps> = ({banner,fetch}) =>{
    const [isOnRemoving,setIsOnRemoving] = useState(false);
    const [isOnEditing,setIsOnEditing] = useState(false);
    const {upload} = useDownloadFile();

    const onConfirmRemove = async () =>{
        await axios.delete('/banner/remove/'+banner._id)
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
            await axios.patch('/banner/toggle/'+banner._id);
            fetch();
        }catch(err){
            console.log("banner toggle err",err);
        }
    }

    const onEditing = () =>{
        setIsOnEditing(true);
    }
    const onBlurEditing = () =>{
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }
    const onConfirmEdit = async (item:Partial<bannerType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.patch('/banner/edit/'+banner._id, {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("banner edit err",err);
        }
        fetch();
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }

    return <ItemContainer>
        {isOnEditing && <Modal><AddingForm onConfirm={onConfirmEdit} onBlur={onBlurEditing} initialState={banner}/></Modal>}
        {isOnRemoving && <Modal><RemovingForm onConfirm={onConfirmRemove} onBlur={onBlurRemoving}/></Modal>}
        <span>title: {banner.title}</span>
        <span>subtitle: {banner.subTitle}</span>
        <span>buttonText: {banner.buttonText}</span>
        <span>imageUrl: {banner.imageUrl}</span>
        <span>isChosen: {banner.isChosen}</span>
        <span>_id: {banner._id}</span>
        <AdminButton>
            {banner.isChosen ? <button onClick={toggle}>Cancel</button>:<button onClick={toggle}>Choose</button>}
            <button onClick={onEditing}>Edit</button>
            <button onClick={onRemoving}>Remove</button>
        </AdminButton>
    </ItemContainer>
}