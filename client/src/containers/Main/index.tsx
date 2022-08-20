import React from "react";
import {Featured} from "../Featured";
import {Products} from "../Products";
import {Reviews} from "../Reviews";
import {Articles} from "../Articles";
import {BestSellers} from "../BestSellers";
import {BestReviews} from "../BestReviews";
import {MediaCards} from "../MediaCards";

export const Main = () =>{
    return <>
        <Featured/>
        <Products/>
        <Reviews/>
        <Articles/>
        <BestSellers/>
        <BestReviews/>
        <MediaCards/>
    </>
}