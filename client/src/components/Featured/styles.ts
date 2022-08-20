import styled from "styled-components";
import {mixins} from "../theme/fonts";
import {colors} from "../theme/palette";

export const FeaturedComponentContainer = styled.div`
  width: 100%;
`;

export const BannerContainer = styled.div<{url:string}>`
  width: 100%;
  height: 728px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({url}) => url && `background-image: url(${url})`};
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstText = styled.span`
  ${mixins.font.anton.regular};
  font-size: 58px;
  color:${colors.orangePrimary};
  text-transform: uppercase;
`;

export const SecondText = styled.span`
  color:rgba(0,0,0,0);
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
  font-style: italic;
  font-family:Futura ;
  font-size: 83px;
  display: flex;
  align-items: center;
  gap:21px;
  &>div{
    width: 109px;
    height: 3px;
    background-color: white;
  }
`;

export const WaweContainer = styled.div`
  width: 100%;
  position: relative;
  &>svg:first-child{
    position: absolute;
    top:-107px;
  }
  &>svg{
    position: absolute;
    top:-70px;
  }
  &>span{
    ${mixins.font.secondary.regular};
    font-size: 25px;
    position: absolute;
    color: #111C4E;
    top:50px;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const CompaniesWrapper = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  margin-top: 83px;
  background-color: white;
  gap: 59px;
  border-top: 1px black;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 70px;
`;
