import React, {useEffect} from "react";
import {DirContainer, ItemsContainer} from "../styles";
import {Review} from "./Review";
import {useGetReviews} from "../../hooks/useGet";

export const Reviews = () =>{
    const {reviews,fetch} = useGetReviews();
    useEffect(() => {
        document.body.style.overflow = "unset";
    }, []);

    return <DirContainer>
        <ItemsContainer>
        {reviews.reverse().map(review => <Review fetch={fetch} key={review._id} review={review}/>)}
        </ItemsContainer>
    </DirContainer>
}