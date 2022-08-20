import React from "react";
import {FeaturedComponentContainer} from "./styles";
import {Banner} from "./Banner";
import {Wave} from "../Wave/Wave";
import {Companies} from "./Companies";
import {useGetBanners} from "../../admin/hooks/useGet";

export const FeturedComponent = () =>{
    const {banners} = useGetBanners();
    return <FeaturedComponentContainer>
        {banners.map(banner => banner.isChosen && <Banner key={banner._id} banner={banner} />)}
        <Wave/>
        <Companies/>
    </FeaturedComponentContainer>
}