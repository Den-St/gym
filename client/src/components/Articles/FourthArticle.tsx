import React from "react";
import {
    FourthArticleContainer,
    ReadMore,
    SecondArticleContainer,
    TextContainer
} from "./styles";

import article4 from "../../assets/article4.png";
import {articleProps} from "./FirstArticle";

export const FourthArticle:React.FC<articleProps> = ({url}) =>{
    return <FourthArticleContainer url={url}>
        <TextContainer>
            <ReadMore>Read more</ReadMore>
        </TextContainer>
    </FourthArticleContainer>
}