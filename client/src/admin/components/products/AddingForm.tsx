import React, {useCallback, useState} from "react";
import {bestsellerType, featuredType, productType} from "../../../types";
import {AddingFormContainer} from "../styles";
import axios from "../../../axios";

type AddingFormProps = {
    onConfirm:(item:Partial<productType>) => void,
    onBlur:() => void,
    initialState?:Partial<productType>

}

export const AddingForm:React.FC<AddingFormProps> = ({onBlur,onConfirm,initialState}) =>{
    const [item,setItem] = useState<Partial<productType>>({manUrl:initialState?.manUrl,jar1Url:initialState?.jar1Url,jar2Url:initialState?.jar2Url,buttonText:initialState?.buttonText,description:initialState?.description,name:initialState?.name,manFile:initialState?.manFile,jar2File:initialState?.jar2File,jar1File:initialState?.jar1File,type:initialState?.type});
    const onChangeManUrl = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        try{
            if(e.target.files){
                setItem(prev =>({...prev,manFile:e?.target.files?.[0]}));
            }
        }catch(err){
            console.log(err);
        }
    },[])
    const onChangeJar1Url = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        try{
            if(e.target.files){
                setItem(prev =>({...prev,jar1File:e?.target.files?.[0]}));
            }
        }catch(err){
            console.log(err);
        }
    },[])
    const onChangeJar2Url = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        try{
            if(e.target.files){
                setItem(prev =>({...prev,jar2File:e?.target.files?.[0]}));
            }
        }catch(err){
            console.log(err);
        }
    },[])
    const onChangeButtonText = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,buttonText:e.target.value}));
    },[])
    const onChangeDescription = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,description:e.target.value}));
    },[])
    const onChangeName = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,name:e.target.value}));
    },[])
    const onChangeType = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(prev =>({...prev,type:e.target.value}));
    },[])


    return <AddingFormContainer>
        <div>manUrl:<input type={"file"} onChange={onChangeManUrl}/></div>
        <div>jar1Url:<input type={"file"} onChange={onChangeJar1Url}/></div>
        <div>jar2Url:<input type={"file"} onChange={onChangeJar2Url}/></div>
        <div>buttonText:<input value={item.buttonText} onChange={onChangeButtonText}/></div>
        <div>description:<input value={item.description} onChange={onChangeDescription}/></div>
        <div>name:<input value={item.name} onChange={onChangeName}/></div>
        <div>type:<input value={item.type} onChange={onChangeType}/></div>
        <div><button onClick={() => onConfirm(item)}>Confirm</button><button onClick={onBlur}>Cancel</button></div>
    </AddingFormContainer>
}