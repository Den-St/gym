import React from "react";
import {ArticleHeader, Date, FirstArticleContainer, New, ReadMore, TextContainer} from "./styles";

import article1 from "../../assets/article1.png";

export type articleProps ={
    url:string
}

export const FirstArticle:React.FC<articleProps> = ({url}) =>{
    return <FirstArticleContainer url={url}>
        <TextContainer>
            <Date>23 May 2022</Date>
            <ArticleHeader fontsize={"39px"}>Best Summer Outfit Style in this Country</ArticleHeader>
            <ReadMore>Read more</ReadMore>
        </TextContainer>
        <New>New</New>
    </FirstArticleContainer>
}