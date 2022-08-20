import React from "react";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {WaweContainer} from "../Featured/styles";

export const Wave = () =>{
    return <WaweContainer>
        <SvgIcon width={"100%"} type={'waveline'}/>
        <SvgIcon width={'100%'} type={'wave'}/>
        <span>Featured in</span>
    </WaweContainer>
}