import React, {useCallback, useState} from "react";
import {bestsellerType, featuredType, productType, reviewType} from "../../../types";
import {AddingFormContainer} from "../styles";

type AddingFormProps = {
    onConfirm:(item:Partial<reviewType>) => void,
    onBlur:() => void,
    initialState?:Partial<reviewType>
}

export const AddingForm:React.FC<AddingFormProps> = ({onBlur,onConfirm,initialState}) =>{
    const [item,setItem] = useState<Partial<reviewType>>({type:initialState?.type});
    const onChangeType = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,type:e.target.value}));
    },[])

    return <AddingFormContainer>
        <div>type:<input value={item.type} onChange={onChangeType}/></div>
        <div><button onClick={() => onConfirm(item)}>Confirm</button><button onClick={onBlur}>Cancel</button></div>
    </AddingFormContainer>
}