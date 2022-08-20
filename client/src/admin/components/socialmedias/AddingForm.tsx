import React, {useCallback, useState} from "react";
import {bestsellerType, featuredType, productType, reviewType, socialmediaType} from "../../../types";
import {AddingFormContainer} from "../styles";
import axios from "../../../axios";

type AddingFormProps = {
    onConfirm:(item:Partial<socialmediaType>) => void,
    onBlur:() => void,
    initialState?:Partial<socialmediaType>

}

export const AddingForm:React.FC<AddingFormProps> = ({onBlur,onConfirm,initialState}) =>{
    const [item,setItem] = useState<Partial<socialmediaType>>({imageUrl:initialState?.imageUrl,imageFile:initialState?.imageFile});
    const onChangeImageUrl = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        try{
            if(e.target.files){
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