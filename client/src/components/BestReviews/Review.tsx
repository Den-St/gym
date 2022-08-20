import React from "react";
import {Author, Content, Header, ReviewContainer} from "./styles";
import {StarsReview} from "../BestSellers/styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import comment from "../../assets/comment.png";
import {reviewType} from "../../types";

type ReviewProps = {
    review:reviewType
}

export const Review:React.FC<ReviewProps> = ({review}) =>{
    return <ReviewContainer url={comment}>
        <Header>{review.title}</Header>
        <Content>{review.description}</Content>
        <Author>-{review.authorName}</Author>
        <StarsReview>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
            <SvgIcon type={'star'}/>
        </StarsReview>
    </ReviewContainer>
}