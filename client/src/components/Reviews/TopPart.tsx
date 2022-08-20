import React from "react";
import {Arrows, Header, NumberOfReviews, Stars, TopPartContainer} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";

export const TopPart =() =>{
    return <TopPartContainer>
        <Header>Real Reviews From Real Customers</Header>
        <Stars>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
        </Stars>
        <NumberOfReviews>1050 Reviews</NumberOfReviews>
        <Arrows>
            <SvgIcon type={'leftArrow'}/>
            <SvgIcon type={'rightArrow'}/>
        </Arrows>
    </TopPartContainer>
}