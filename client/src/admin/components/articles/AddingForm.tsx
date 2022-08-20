import React, {useCallback, useState} from "react";
import {articleType, bannerType} from "../../../types";
import {AddingFormContainer} from "../styles";
import axios from "../../../axios";

type AddingFormProps = {
    onConfirm:(item:Partial<articleType>) => void,
    onBlur:() => void,
    initialState?:Partial<articleType>

}

export const AddingForm:React.FC<AddingFormProps> = ({onBlur,onConfirm,initialState}) =>{
    const [item,setItem] = useState<Partial<articleType>>({type:initialState?.type,imageUrl:initialState?.imageUrl,title:initialState?.title, imageFile:initialState?.imageFile});
    const onChangeType = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,type:e.target.value}));
    },[])
    const onChangeTitle = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,title: e.target.value}));
    },[])

    const onChangeImageUrl = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        try{
            if(e.target.files){
                // const formData = new FormData();
                // const file = e.target.files[0];
                // formData.append('image',file);
                // const {data} = await axios.post('/upload',formData);
                // console.log(data.url);
                setItem(prev =>({...prev,imageFile:e?.target.files?.[0]}));
            }
        }catch(err){
            console.log(err);
        }
    },[])

    return <AddingFormContainer>
        <div>type:<input value={item.type} onChange={onChangeType}/></div>
        <div>title:<input value={item.title} onChange={onChangeTitle}/></div>
        <div>imageUrl:<input type={"file"} onChange={onChangeImageUrl}/></div>
        <div><button onClick={() => onConfirm(item)}>Confirm</button><button onClick={onBlur}>Cancel</button></div>
    </AddingFormContainer>
}