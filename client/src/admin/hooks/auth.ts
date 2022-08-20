import axios, {getConfig} from "../../axios";
import {useEffect, useState} from "react";
import {loginDataType} from "../../types";

import Cookies from "js-cookie";

export const setToken = (token:string) =>{
    console.log("set",token)
    Cookies.set("token",token);
}
export const getToken = () =>{
    return Cookies.get("token");
}

export const deleteTokenCookie = () =>{
    Cookies.remove("token");
}

export const useCurrentUser = () =>{
    const [isAuthed, setIsAuthed] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkAuth = async() => {
            setLoading(true)
            try{
                const res = await axios.get('auth/me', getConfig());
                if(res?.data?._id) setIsAuthed(true);
                setLoading(false)
            }
            catch (err){
                console.log("err",err);
                setLoading(false)
            }
        }
        checkAuth();
    }, [])
    return {isAuthed, loading};
}

export const useLogin = (clearData?: () => void) => {
    const [success,setSuccess] = useState(false);
    const [tryNumber,setTryNumber] = useState(0);
    const onConfirm = async (loginData:loginDataType) =>{
        await axios.post('/auth/login',loginData).then(res => {
            setSuccess(res.status === 200);
            setTryNumber(prev => ++prev);
            setToken(res.data.token);
            if(res.status === 200) {
                clearData?.()
            }
        });
    }
    return {success, tryNumber, onConfirm}
}
