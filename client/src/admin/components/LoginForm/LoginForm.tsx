import React, {useCallback, useState} from "react";
import {Container} from "./styles";
import {loginDataType} from "../../../types";
import {useLogin} from "../../hooks/auth";
import {Navigate} from "react-router-dom";


export const LoginForm = () =>{
    const [loginData,setLoginData] = useState<loginDataType>({login:"",password:""})
    const clearData = () =>{
        setLoginData({login:"",password:""});
    }
    const {success, tryNumber, onConfirm} = useLogin(clearData);

    const onChangeLogin = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setLoginData(prev => ({...prev,login:e.target.value}));
    },[])
    const onChangePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        setLoginData(prev => ({...prev,password:e.target.value}));
    },[])

    return <Container>
        <div>
            <input placeholder={"login"} onChange={onChangeLogin} value={loginData.login}/>
            <input placeholder={"password"} onChange={onChangePassword} value={loginData.password}/>
            <button onClick={() => onConfirm(loginData)}>Confirm</button>
        </div>
    </Container>
}