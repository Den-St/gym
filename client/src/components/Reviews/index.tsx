import React from "react";
import {ReviewsComponentContainer} from "./styles";
import {TopPart} from "./TopPart";
import {ReviewsPart} from "./ReviewsPart";

export const ReviewsComponent = () =>{
    return <ReviewsComponentContainer>
        <TopPart/>
        <ReviewsPart/>
    </ReviewsComponentContainer>
}