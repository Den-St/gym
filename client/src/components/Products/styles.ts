import styled from "styled-components";
import {colors} from "../theme/palette";
import {mixins} from "../theme/fonts";
import exp from "constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  position: relative;
`;

export const TopLineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 206px;
`;

export const BeigeLine = styled.div`
  height: 100%;
  width: 87%;
  background-color: ${colors.beigeLight};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const TopLineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 135px;
  gap: 25px;
  &>svg{
    width: 90px;
    height: 78px;
  }
`;

export const WhiteArrow = styled.div`
  width: 135px;
  height: 206px;
  z-index: 6;
  height: 100%;
  position: absolute;
  left: -41px;
  &>div{
    transform: skewX(-40deg);
    background-color: white;
    width: 75px;
    height: 103px;
    z-index: 6;

  }
  &>div:first-child{
    transform: skewX(40deg);
    width: 75px;
    height: 103px;
    background-color: white;
    z-index: 6;

  }
`;

export const GrayLine = styled.div`
  width: 13%;
  height: 206px;
  background-color: ${colors.lightGray};
  z-index: 3;
  position: relative;
`;

export const Topic = styled.div`
  width: 100%;
  height: calc(177px + 81px + 41px);
  padding:41px 0 177px 0;
  display: flex;
  justify-content: center;
  ${mixins.font.anton.regular};
  font-size: 55px;
  color: ${colors.darkBlue};
`;

export const WaveContainer =styled.div`
  width: 100%;
  position: absolute;
  top:580px;
`;

export const ProductItemsContainer =styled.div`
  width: 88%;
  display: flex;
  flex-direction:row ;
  justify-content: space-between;
  top:500px;
  left: 90px;
  margin: -200px 0 0 90px;
`;
export const ProductItemContainer = styled.div`
  position: relative;
  height: 618px;
  width: 366px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Parallelogram = styled.div`
  width: 100%;
  height: 197px;
  position: absolute;
  transform: skew(-30deg);
  background-color: ${colors.extraLightGray};
`;

export const Name = styled.span`
  ${mixins.font.third.bold};
  font-size: 24px;
  text-transform: uppercase;
  line-height: 120%;
  margin-bottom:10px;

`;

export const Description =styled.span`
  ${mixins.font.DMSans.regular};
  text-align: justify;
  width: 317px;
  font-size: 14px;
  line-height: 130%;
  text-transform: uppercase;
  margin-top:15px;
`;

export const Man = styled.img`
  max-width: 326px;
  max-height: 307px;
  position: absolute;
  top:-100px;
  left: 50%;
  transform: translate(-50%);
`;

export const Images = styled.div`
  position: relative;
  min-width: 240px;
  height: 312px;
  max-width: 326px;
`;

export const Jar1 = styled.img`
  position:absolute;
  max-width: 126px;
  max-height: 176px;
  left: 30px;
  bottom:30px;
`;

export const Jar2 = styled.img`
  position:absolute;
  max-width: 134px;
  max-height: 207px;
  right: 15px;
  bottom: 30px;
`;