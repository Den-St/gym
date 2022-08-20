import React from "react";
import {
    ReadMore,
    TextContainer, ThirdArticleContainer
} from "./styles";

import article3 from "../../assets/article3.png";
import {articleProps} from "./FirstArticle";

export const ThirdArticle:React.FC<articleProps> = ({url}) =>{
    return <ThirdArticleContainer url={url}>
        <TextContainer>
            <ReadMore>Read more</ReadMore>
        </TextContainer>
    </ThirdArticleContainer>
}