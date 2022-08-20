import React from "react";
import {MediaCardsContainer, OrangeWave, Wave} from "./styles";
import {Cards} from "./Cards";
import background from "../../assets/background2.png";
import {SvgIcon} from "../../assets/svg/SvgIcon";

export const MediaCardsComponent = () =>{
    return <MediaCardsContainer url={background}>
            <Cards/>
            <OrangeWave><SvgIcon type={'orangeWave'}/></OrangeWave>
            <Wave><SvgIcon type={'strongWave'}/></Wave>
    </MediaCardsContainer>
}