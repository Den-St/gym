import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {LayoutContainer} from "./styles";
import {MainContainer} from "../Main/styles";
import {useLocation} from "react-router-dom";

type LayoutProps = {
    children:React.ReactNode,
}


export const Layout:React.FC<LayoutProps> = ({children}) =>{
    const {pathname} = useLocation();
    console.log(useLocation());
    return <LayoutContainer>
        {pathname.slice(0,6) !== "/admin" && <Header/>}
        <MainContainer admin={pathname.slice(0,6) !== "/admin"}>
        {children}
        </MainContainer>
        {pathname.slice(0,6) !== "/admin" && <Footer/>}
    </LayoutContainer>
}