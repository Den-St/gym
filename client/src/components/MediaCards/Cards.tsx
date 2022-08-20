import React from "react";
import {BigCard, Card, CardsContainer, Center, Side, SubTitle, Title} from "./styles";
import {imageType} from "../../types";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import card7 from "../../assets/card7.png";
import {useGetSocialmedias} from "../../admin/hooks/useGet";

export const Cards = () =>{
    const {socialmedias} = useGetSocialmedias();
    const chosenSocialmedias = socialmedias.filter(item => item.isChosen);
    return <CardsContainer>
        <Side>
            {chosenSocialmedias[0] && <Card url={chosenSocialmedias[0].imageUrl}/>}
            {chosenSocialmedias[1] && <Card url={chosenSocialmedias[1].imageUrl}/>}
            {chosenSocialmedias[2] && <Card url={chosenSocialmedias[2].imageUrl}/>}
        </Side>
        <Center>
            <Title>#infinitelabs</Title>
            <SubTitle>Post on any social media channel using #infinitelabs for a
                chance to be featured and win free products from infinite Supps!</SubTitle>
            {chosenSocialmedias[3] && <BigCard url={chosenSocialmedias[3].imageUrl}/>}
        </Center>
        <Side>
            {chosenSocialmedias[4] && <Card url={chosenSocialmedias[4].imageUrl}/>}
            {chosenSocialmedias[5] && <Card url={chosenSocialmedias[5].imageUrl}/>}
            {chosenSocialmedias[6] && <Card url={chosenSocialmedias[6].imageUrl}/>}
        </Side>
    </CardsContainer>
}