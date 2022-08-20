import React, {useCallback, useState} from "react";
import {bannerType} from "../../../types";
import {AddingFormContainer} from "../styles";
import axios from "../../../axios";

type AddingFormProps = {
    onConfirm:(item:Partial<bannerType>) => void,
    onBlur:() => void,
    initialState?:Partial<bannerType>
}

export const AddingForm:React.FC<AddingFormProps> = ({onBlur,onConfirm,initialState}) =>{
    const [item,setItem] = useState<Partial<bannerType>>({title:initialState?.title,subTitle:initialState?.subTitle,buttonText:initialState?.buttonText,imageUrl:initialState?.imageUrl,imageFile:initialState?.imageFile});
    const onChangeTitle = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,title:e.target.value}));
    },[])
    const onChangeSubTitle = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,subTitle:e.target.value}));
    },[])
    const onChangeButtonText = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,buttonText: e.target.value}));
    },[])
    const onChangeImageUrl = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        try{
            if(e.target.files){
                // const formData = new FormData();
                // const file = e.target.files[0];
                // formData.append('image',file);
                // const {data} = await axios.post('/upload',formData);
                // console.log(data.url);
                setItem(prev =>({...prev,imageFile: e?.target.files?.[0]}));
            }
        }catch(err){
            console.log(err);
        }
    },[])

    return <AddingFormContainer>
        <div>title:<input value={item.title} onChange={onChangeTitle}/></div>
        <div>subTitle:<input value={item.subTitle} onChange={onChangeSubTitle}/></div>
        <div>buttonText:<input value={item.buttonText} onChange={onChangeButtonText}/></div>
        <div>imageUrl:<input type={"file"}  onChange={onChangeImageUrl}/></div>
        <div><button onClick={() => onConfirm(item)}>Confirm</button><button onClick={onBlur}>Cancel</button></div>
    </AddingFormContainer>
}