import React from "react";
import {Container} from "./styles";
import {Banners} from "../banners/Banners";
import {Articles} from "../articles/Articles";
import {Products} from "../products/Products";
import {Featureds} from "../featured/Featureds";
import {Reviews} from "../reviews/Reviews";
import {Socialmedias} from "../socialmedias/Socialmedias";

type CenterProps = {
    type:string
}

export const Center:React.FC<CenterProps> = ({type}) =>{
    switch (type){
        case 'banner':{
            return <Container>
                <Banners/>
            </Container>
        }
        case 'article':{
            return <Container>
                <Articles/>
            </Container>
        }
        case 'product':{
            return <Container>
                <Products/>
            </Container>
        }
        case 'featured':{
            return <Container>
                <Featureds/>
            </Container>
        }
        case 'review':{
            return <Container>
                <Reviews/>
            </Container>
        }
        case 'socialmedia':{
            return <Container>
                <Socialmedias/>
            </Container>
        }
        default :return <></>
    }
}