import styled from "styled-components";
import {mixins} from "../theme/fonts";

export const MediaCardsContainer = styled.div<{url:string}>`
  width: 100%;
  height: 1219px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 110px;
  padding-bottom: 226px;
  align-items: center;
  ${({url}) => url && `background-image:url(${url})`};
  position: relative;
  margin-bottom: 70px;

`;

export const CardsContainer = styled.div`
  width: 84%;
  height: 937px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;

`;

export const Side =styled.div`
  height: 100%;
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Center = styled.div`
  height: 937px;
  width: 44%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div<{url:string}>`
  width: 100%;
  height: 32%;
  box-sizing: border-box;
  border: 3px solid white;
  ${({url}) => url && `background-image:url(${url})`};
`;

export const Title = styled.div`
    ${mixins.font.anton.regular};
    color:white;
    font-size: 52px;
  text-transform: uppercase;
  
`;

export const SubTitle = styled.div`
  ${mixins.font.third.bold};
  font-size: 18px;
  color: white;
  width: 100%;
  text-align: center;
`;

export const BigCard = styled.div<{url:string}>`
  border: 3px solid white;
  border-radius: 10px;
  width: 100%;
  height: 736px;
  ${({url}) => url && `background-image:url(${url})`};
`;

export const Wave = styled.div`
  width: 100%;
  height: 452px;
  z-index: 0;
  &>svg{
      width: 100%;
      height: 452px;
  }
  margin-top: -420px;

`;

export const OrangeWave = styled.div`
  width: 100%;
  height: 452px;
  z-index: 0;
  &>svg{
    width: 100%;
    height: 452px;
  }
  margin-top: -250px;

`;