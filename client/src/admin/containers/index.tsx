import React, {useEffect, useState} from "react";
import {Menu} from "../components/Menu";
import {Container} from "./styles";
import {Center} from "../components/center/Center";
import {Navigate, Route, useNavigate} from "react-router-dom";
import {routes} from "../../routes";
import {useCurrentUser} from "../hooks/auth";

export const Admin = () =>{
    const [type,setType] = useState<string>("banner");
    const {isAuthed, loading} = useCurrentUser();
    console.log('isAuthed:', isAuthed, ' loading', loading);
    if (loading) return <h2>LOADING....</h2>
    if(!isAuthed){
        return <Navigate to={"/admin/login"}/>
    }
    return <Container>
        <Menu type={type} setType={setType}/>
        <Center type={type}/>
    </Container>
}