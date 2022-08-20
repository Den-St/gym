import React from "react";
import {
    ArticleHeader,
    Date,
    New,
    ReadMore,
    SecondArticleContainer,
    TextContainer
} from "./styles";
import article2 from "../../assets/article2.png";
import {articleProps} from "./FirstArticle";

export const SecondArticle:React.FC<articleProps> = ({url}) =>{
    return <SecondArticleContainer url={url}>
        <TextContainer>
            <Date>23 May 2022</Date>
            <ArticleHeader fontsize={"25px"}>Best Summer Outfit Style in this Country</ArticleHeader>
            <ReadMore>Read more</ReadMore>
        </TextContainer>
        <New>New</New>
    </SecondArticleContainer>
}