import React from "react";
import {BuyNowButton} from "../Button/Button";
import {Image, ItemContainer, Name,StarsReview} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {productType} from "../../types";

type ItemProps = {
    product:productType,
}

export const Item:React.FC<ItemProps> = ({product}) =>{
    return <ItemContainer>
        <Image><img src={product.jar2Url} alt={""}/></Image>
        <Name>{product.name}</Name>
        <StarsReview>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
        </StarsReview>
        <BuyNowButton/>
    </ItemContainer>
}