import React from "react";
import {BestReviewsContainer, SeeAll} from "./styles";
import {Reviews} from "./Reviews";

export const BestReviewsComponent = () =>{
    return <BestReviewsContainer>
        <Reviews/>
        <SeeAll>SEE ALL REVIEWS</SeeAll>
    </BestReviewsContainer>
}