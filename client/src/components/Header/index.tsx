import React from "react";
import {TopHeader} from "./TopHeader";
import {MainHeader} from "./MainHeader";
import {HeaderContainer} from "./styles";

export const HeaderComponent = () =>{
    return <HeaderContainer>
        <TopHeader/>
        <MainHeader/>
    </HeaderContainer>
}