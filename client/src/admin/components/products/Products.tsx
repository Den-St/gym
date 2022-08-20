import React, {useEffect, useState} from "react";
import {DirContainer, ItemsContainer} from "../styles";
import {useGetProducts} from "../../hooks/useGet";
import {Product} from "./Product";
import {featuredType, productType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {AddingForm} from "./AddingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";



export const Products = () =>{
    const {products,fetch} = useGetProducts();
    const [isOnAdding,setIsOnAdding] = useState(false);
    const {upload} = useDownloadFile()
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

    const onConfirm = async (item:Partial<productType>) =>{
        try{
            if(!item?.manFile || !item?.jar1File || !item?.jar2File) return;
            const manFile = await upload(item?.manFile);
            const jar1File = await upload(item?.jar1File);
            const jar2File = await upload(item?.jar2File);
            await axios.post('/product/create', {...item, manUrl:manFile,jar1Url:jar1File,jar2Url:jar2File});
        }catch(err){
            console.log("product create err",err);
        }
        fetch();
        document.body.style.overflow = "unset";
        setIsOnAdding(false);
    }
    return <DirContainer>
        {isOnAdding && <Modal><AddingForm onBlur={onBlur} onConfirm={onConfirm}/></Modal>}
        <button onClick={onAdding}>Add</button>
        <ItemsContainer>
        {products.reverse().map(product => <Product fetch={fetch} key={product._id} product={product}/>)}
        </ItemsContainer>
    </DirContainer>
}