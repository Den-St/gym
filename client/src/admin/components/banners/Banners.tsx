import React, {useEffect, useState} from "react";
import {useGetBanners} from "../../hooks/useGet";
import {DirContainer, ItemsContainer} from "../styles";
import {Banner} from "./Banner";
import {Modal} from "../../../components/modal/Modal";
import {AddingForm} from "./AddingForm";
import {bannerType} from "../../../types";
import axios from "../../../axios";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {RemovingForm} from "../RemovingForm";

export const Banners = () =>{
    const {banners,fetch} = useGetBanners();
    const [isOnAdding,setIsOnAdding] = useState(false);
    const {upload} = useDownloadFile();

    const onAdding = () =>{
        setIsOnAdding(true);
    }
    const onBlurAdding = () => {
      setIsOnAdding(false);
        document.body.style.overflow = "unset";
    }
    const onConfirm = async (item:Partial<bannerType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.post('/banner/create', {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("banner create err",err);
        }
        fetch();
        setIsOnAdding(false);
        document.body.style.overflow = "unset";
    }

    return <DirContainer>
        {isOnAdding && <Modal><AddingForm onBlur={onBlurAdding} onConfirm={onConfirm}/></Modal>}
        <button onClick={onAdding}>Add</button>
        <ItemsContainer>{banners.reverse().map(banner => <Banner key={banner._id} banner={banner} fetch={fetch}/>)}</ItemsContainer>
    </DirContainer>
}