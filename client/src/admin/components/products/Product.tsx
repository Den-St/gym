import React, {useState} from "react";
import {AdminButton, ItemContainer} from "../styles";
import {bannerType, productType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {RemovingForm} from "../RemovingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {AddingForm} from "./AddingForm";


type ProductProps = {
    product:productType,
    fetch:() => void
}

export const Product:React.FC<ProductProps> = ({product,fetch}) =>{
    const [isOnRemoving,setIsOnRemoving] = useState(false);
    const [isOnEditing,setIsOnEditing] = useState(false);
    const {upload} = useDownloadFile();

    const onConfirmRemove = async () =>{
        await axios.delete('/product/remove/'+product._id)
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
            await axios.patch('/product/toggle/'+product._id);
            fetch();
        }catch(err){
            console.log("product toggle err",err);
        }
    }
    const onEditing = () =>{
        setIsOnEditing(true);
    }
    const onBlurEditing = () =>{
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }
    const onConfirmEdit = async (item:Partial<productType>) =>{
        try{
            if(!item?.manFile || !item?.jar1File || !item?.jar2File) return;
            const manFile = await upload(item?.manFile);
            const jar1File = await upload(item?.jar1File);
            const jar2File = await upload(item?.jar2File);
            await axios.patch('/product/edit/'+product._id, {...item, manUrl:manFile,jar1Url:jar1File,jar2Url:jar2File});
        }catch(err){
            console.log("banner edit err",err);
        }
        fetch();
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }

    return <ItemContainer>
        {isOnEditing && <Modal><AddingForm onConfirm={onConfirmEdit} onBlur={onBlurEditing} initialState={product}/></Modal>}
        {isOnRemoving && <Modal><RemovingForm onConfirm={onConfirmRemove} onBlur={onBlurRemoving}/></Modal>}
        <span>manUrl: {product.manUrl}</span>
        <span>name: {product.name}</span>
        <span>jar1Url: {product.jar1Url}</span>
        <span>jar2Url: {product.jar2Url}</span>
        <span>buttonText: {product.buttonText}</span>
        <span>descriptionText: {product.description}</span>
        <span>isChosen: {product.isChosen}</span>
        <AdminButton>
            {product.isChosen ? <button onClick={toggle}>Cancel</button>:<button onClick={toggle}>Choose</button>}
            <button onClick={onEditing}>Edit</button>

            <button onClick={onRemoving}>Remove</button>

        </AdminButton>
    </ItemContainer>
}