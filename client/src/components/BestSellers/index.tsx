import React from "react";
import {Items} from "./Items";
import {BestSellersContainer, BottomHeader, BottomSubHeader, Header, HugeWave, Wave} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";

export const BestSellersComponent = () =>{
    return <BestSellersContainer>
        <Header>best sellers</Header>
        <Items/>
        <BottomHeader>Ok. Really though. Does it actually work?</BottomHeader>
        <BottomSubHeader>Yessss. Here’s what our customers are saying</BottomSubHeader>
        <Wave><SvgIcon type={'wave'}/></Wave>
        <HugeWave><SvgIcon type={"hugeWave"}/></HugeWave>
    </BestSellersContainer>
};