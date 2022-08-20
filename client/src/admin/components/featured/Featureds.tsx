import React, {useEffect, useState} from "react";
import {DirContainer, ItemsContainer} from "../styles";
import {useGetFeatureds} from "../../hooks/useGet";
import {Featured} from "./Featured";
import {featuredType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {AddingForm} from "./AddingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";

export const Featureds = () =>{
    const {featureds,fetch} = useGetFeatureds();
    const [isOnAdding,setIsOnAdding] = useState(false);
    const {upload} = useDownloadFile();
    console.log("sdfg")
    useEffect(() => {
        document.body.style.overflow = "unset";
    }, []);
    const onAdding = () =>{
        setIsOnAdding(true);
    }
    const onBlur = () => {
        setIsOnAdding(false);
        document.body.style.overflow = "unset";

    }
    const onConfirm = async (item:Partial<featuredType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.post('/featured/create', {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("featured create err",err);
        }
        fetch();
        document.body.style.overflow = "unset";

        setIsOnAdding(false);
    }
    return <DirContainer>
        {isOnAdding && <Modal><AddingForm onBlur={onBlur} onConfirm={onConfirm}/></Modal>}
        <button onClick={onAdding}>Add</button>
        <ItemsContainer>
        {featureds.reverse().map(featured => <Featured fetch={fetch} key={featured._id} featured={featured}/>)}
    </ItemsContainer>
    </DirContainer>
}