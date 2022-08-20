import React from "react";
import {ReviewsContainer} from "./styles";
import {Review} from "./Review";
import {useGetReviews} from "../../admin/hooks/useGet";

export const Reviews = () =>{
    const {reviews} = useGetReviews();
    return <ReviewsContainer>
        {reviews.map(review => <Review key={review._id} review={review} />)}
    </ReviewsContainer>
}