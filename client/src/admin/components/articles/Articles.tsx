import React, {useEffect, useState} from "react";
import {DirContainer, ItemsContainer} from "../styles";
import {Article} from "./Article";
import {useGetArticles} from "../../hooks/useGet";
import {articleType, bannerType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {AddingForm} from "./AddingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";

export const Articles = () =>{
    const {articles,fetch} = useGetArticles();
    const [isOnAdding,setIsOnAdding] = useState(false);
    const {upload} = useDownloadFile();
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
    const onConfirm = async (item:Partial<articleType>) =>{
        try{
            if(!item.imageFile) return;
            const imageUrl = await upload(item?.imageFile);
            await axios.post('/article/create', {...item, imageUrl:imageUrl});
        }catch(err){
            console.log("article create err",err);
        }
        fetch();
        document.body.style.overflow = "unset";

        setIsOnAdding(false);
    }
    return <DirContainer>
        {isOnAdding && <Modal><AddingForm onBlur={onBlur} onConfirm={onConfirm}/></Modal>}
        <button onClick={onAdding}>Add</button>
        <ItemsContainer>
        {articles.reverse().map(article => <Article fetch={fetch} key={article._id} article={article}/>)}
    </ItemsContainer>
    </DirContainer>
}