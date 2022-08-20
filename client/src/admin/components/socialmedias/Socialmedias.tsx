import React, {useEffect, useState} from "react";
import {DirContainer, ItemsContainer} from "../styles";
import {Socialmedia} from "./Socialmedia";
import { useGetSocialmedias} from "../../hooks/useGet";
import {socialmediaType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {AddingForm} from "./AddingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";

export const Socialmedias = () =>{
    const {socialmedias,fetch} = useGetSocialmedias();
    const [isOnAdding,setIsOnAdding] = useState(false);
    const {upload} = useDownloadFile();

    const onAdding = () =>{
        setIsOnAdding(true);
    }
    const onBlur = () => {
        setIsOnAdding(false);
        document.body.style.overflow = "unset";

    }
    const onConfirm = async (item:Partial<socialmediaType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.post('/socialmedia/create',{...item,imageUrl:imageUrl});
        }catch(err){
            console.log("socialmedia create err",err);
        }
        fetch();
        document.body.style.overflow = "unset";
        setIsOnAdding(false);
    }
    return <DirContainer>
        {isOnAdding && <Modal><AddingForm onBlur={onBlur} onConfirm={onConfirm}/></Modal>}
        <button onClick={onAdding}>Add</button>
        <ItemsContainer>
        {socialmedias.reverse().map(socialmedia => <Socialmedia fetch={fetch} key={socialmedia._id} socialmedia={socialmedia}/>)}
    </ItemsContainer>
    </DirContainer>
}