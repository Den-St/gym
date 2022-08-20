import React, {useState} from "react";
import {AdminButton, ItemContainer} from "../styles";
import {articleType, bannerType, reviewType} from "../../../types";
import axios from "../../../axios";
import {Modal} from "../../../components/modal/Modal";
import {RemovingForm} from "../RemovingForm";
import {useDownloadFile} from "../../hooks/useDownloadFile";
import {AddingForm} from "./AddingForm";


type ReviewProps = {
    review:reviewType,
    fetch:() => void
}

export const Review:React.FC<ReviewProps> = ({review,fetch}) =>{
    const [isOnRemoving,setIsOnRemoving] = useState(false);
    const [isOnEditing,setIsOnEditing] = useState(false);
    const {upload} = useDownloadFile();

    const onConfirmRemove = async () =>{
        await axios.delete('/review/remove/'+review._id)
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
            await axios.patch('/review/toggle/'+review._id);
            fetch();
        }catch(err){
            console.log("review toggle err",err);
        }
    }
    const onEditing = () =>{
        setIsOnEditing(true);
    }
    const onBlurEditing = () =>{
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }
    const onConfirmEdit = async (item:Partial<reviewType>) =>{
        try{
            await axios.patch('/review/edit/'+review._id,item);
        }catch(err){
            console.log("review edit err",err);
        }
        fetch();
        setIsOnEditing(false);
        document.body.style.overflow = "unset";
    }

    return <ItemContainer>
        {isOnEditing && <Modal><AddingForm onConfirm={onConfirmEdit} onBlur={onBlurEditing} initialState={review}/></Modal>}
        {isOnRemoving && <Modal><RemovingForm onConfirm={onConfirmRemove} onBlur={onBlurRemoving}/></Modal>}
        <span>type: {review.type}</span>
        <span>authorName: {review.authorName}</span>
        <span>title: {review.title}</span>
        <span>isChosen: {review.isChosen}</span>
        <span>jarUrl: {review.jarUrl}</span>
        <span>description: {review.description}</span>
        <span>numberOfStars: {review.numberOfStars}</span>
        <AdminButton>
            {review.isChosen ? <button onClick={toggle}>Cancel</button> :<button onClick={toggle}>Choose</button>}
            <button onClick={onEditing}>Edit</button>

            <button onClick={onRemoving}>Remove</button>

        </AdminButton>
    </ItemContainer>
}