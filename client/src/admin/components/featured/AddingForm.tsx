import React, {useCallback, useState} from "react";
import {bestsellerType, featuredType} from "../../../types";
import {AddingFormContainer} from "../styles";
import axios from "../../../axios";

type AddingFormProps = {
    onConfirm:(item:Partial<featuredType>) => void,
    onBlur:() => void,
    initialState?:Partial<featuredType>

}

export const AddingForm:React.FC<AddingFormProps> = ({onBlur,onConfirm,initialState}) =>{

    const [item,setItem] = useState<Partial<featuredType>>({imageUrl:initialState?.imageUrl,imageFile:initialState?.imageFile});
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
        <div>imageUrl:<input type={"file"} onChange={onChangeImageUrl}/></div>
        <div><button onClick={() => onConfirm(item)}>Confirm</button><button onClick={onBlur}>Cancel</button></div>
    </AddingFormContainer>
}