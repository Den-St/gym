import React from "react";
import {BeigeLine, GrayLine, TopLineContainer, TopLineItem, WhiteArrow} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";

export const TopLine = () =>{
    return <TopLineContainer>
        <BeigeLine>
            <TopLineItem><SvgIcon type={'why1'}/><span>Made in USA</span></TopLineItem>
            <TopLineItem><SvgIcon type={'why2'}/><span>Satisfaction Guranteed</span></TopLineItem>
            <TopLineItem><SvgIcon type={'why3'}/><span>Clinically Effective Doses</span></TopLineItem>
        </BeigeLine>
        <GrayLine>
            <WhiteArrow><div/><div/></WhiteArrow>
        </GrayLine>
    </TopLineContainer>
}