import React from "react";
import {BuyNowButton} from "../Button/Button";
import {BannerContainer, BannerContent, FirstText, SecondText} from "./styles";
import man from "../../../src/assets/unsplash_9dzWZQWZMdE.png"
import {bannerType} from "../../types";

type BannerProps = {
    banner:bannerType
}

export const Banner:React.FC<BannerProps> = ({banner}) =>{
    return <BannerContainer url={banner.imageUrl}>
        <BannerContent>
            <FirstText>{banner.title}</FirstText>
            <SecondText><div/>{banner.subTitle}<div/></SecondText>
            <BuyNowButton text={banner.subTitle}/>
        </BannerContent>
    </BannerContainer>
}