import React from "react";
import {ReviewsPartContainer} from "./styles";
import {Review} from "./Review";
import {useGetReviews} from "../../admin/hooks/useGet";


export const ReviewsPart = () =>{
    const {reviews} = useGetReviews();
    const chosenReviews = reviews.filter(review => review.isChosen && review.type != 'best');
    return <ReviewsPartContainer>
        {chosenReviews.map(review => <Review key={review._id} review={review}/>)}
    </ReviewsPartContainer>
}
