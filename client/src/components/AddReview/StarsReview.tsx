import React from "react";
import {Star} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {StarsReview} from "../BestSellers/styles";
import {starsType} from "../../types";

type StarsProps = {
    stars:starsType,
    onChangeNumberOfStars:(numberOfStars:number) => void,
}

export const Stars:React.FC<StarsProps> = ({stars,onChangeNumberOfStars}) =>{
    return <StarsReview>
            {stars.chosenStars.map((star,index) => <Star key={index} onClick={() => onChangeNumberOfStars(index+1)} $isRest={false}><SvgIcon type={'star'}/></Star>)}
            {stars.rest.reverse().map((star,index) => <Star key={index} onClick={() => onChangeNumberOfStars(5-star)} $isRest={true}><SvgIcon type={'star'}/></Star>)}
        </StarsReview>
}