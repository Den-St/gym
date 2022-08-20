import React from "react";
import {Comment, CommentHeader, Date, Image, ReviewContainer, Stars, StarsReview} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {reviewType} from "../../types";
import {getStars} from "../../utils";

type ReviewType = {
    review:reviewType
}

export const Review:React.FC<ReviewType> = ({review}) =>{
    const stars = getStars(review.numberOfStars);
    return <ReviewContainer>
        <StarsReview>
            {stars.map(star => <SvgIcon type={'star'}/>)}
        </StarsReview>
        <CommentHeader>{review.title}</CommentHeader>
        <Date>{review.createdAt}</Date>
        <Image><img src={review.jarUrl} alt={""}/></Image>
        <Comment>{review.description}</Comment>
    </ReviewContainer>
}