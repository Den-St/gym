import React from "react";
import {ArticlesComponentContainer, ArticlesContainer, Header, LeftArticles, OrangeWawe} from "./styles";
import {FirstArticle} from "./FirstArticle";
import {SecondArticle} from "./SecondArticle";
import {ThirdArticle} from "./ThirdArticle";
import {FourthArticle} from "./FourthArticle";
import orangewave from "../../assets/OrangeWave.png";
import {useGetArticles} from "../../admin/hooks/useGet";


export const ArticlesComponent = () =>{
    const {articles} = useGetArticles();
    const chosenArticles = articles.reverse().filter(article => article.isChosen);
    return <ArticlesComponentContainer>
        <Header>pOpULAR ARTICLES</Header>
        <ArticlesContainer>
            <LeftArticles>
                {chosenArticles[0] && <FirstArticle url={chosenArticles[0].imageUrl}/>}
                {chosenArticles[1] && <ThirdArticle url={chosenArticles[1].imageUrl}/>}
                {chosenArticles[2] && <FourthArticle url={chosenArticles[2].imageUrl}/>}
            </LeftArticles>
            {chosenArticles[3] && <SecondArticle url={chosenArticles[3].imageUrl}/>}
        </ArticlesContainer>
        <OrangeWawe><img src={orangewave} /></OrangeWawe>
    </ArticlesComponentContainer>
}