import React from "react";
import {MainHeaderContainer, MainHeaderWrapper} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {NavigationMenu} from "./NavigationMenu";

export const MainHeader = () =>{
    return <MainHeaderContainer>
        <MainHeaderWrapper>
            <SvgIcon height={'39px'} type={'logo'}/>
            <NavigationMenu/>
        </MainHeaderWrapper>
    </MainHeaderContainer>
}