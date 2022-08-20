import styled from "styled-components";
import {mixins} from "../theme/fonts";
import {colors} from "../theme/palette";

export const ArticlesComponentContainer = styled.div`
  width: 100%;
  height: 954px;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:40px;
  position: relative;
`;

export const Header = styled.div`
  ${mixins.font.anton.regular};
  font-size: 55px;
  color:${colors.darkBlue};
  text-transform: uppercase;
`;

export const ArticlesContainer = styled.div`
  width: 1134px;
  height: 713px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position:relative;
  gap: 22px;
  z-index: 1;
`;

export const FirstArticleContainer = styled.div<{url:string}>`
  width:755px;
  height: 452px;
  ${({url}) => url && `background-image: url(${url})`};
  box-sizing: border-box;
  position: relative;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color:white;
  position: absolute;
  left:22px;
  bottom: 16px;
`;

export const Date = styled.div`
  ${mixins.font.DMSans.medium};
  font-size: 14px;
`;

export const ArticleHeader = styled.div<{fontsize:string}>`
  ${mixins.font.third.bold};
  ${({fontsize}) => fontsize && `font-size: ${fontsize}`};
  width:55%;
  height: 80px;
`;

export const ReadMore = styled.div`
  ${mixins.font.DMSans.regular};
  padding-top: 20px;
  font-size:14px;
`;

export const New = styled.div`
  width: 66px;
  height: 23px;
  display: flex;
  position: absolute;
  right:16px;
  bottom: 20px;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${colors.orangePrimary};
`;

export const SecondArticleContainer = styled.div<{url:string}>`
  width:357px;
  height: 713px;
  position:relative;
  ${({url}) => url && `background-image: url(${url})`};
`;

export const ThirdArticleContainer = styled.div<{url:string}>`
  width:357px;
  height:240px;
  ${({url}) => url && `background-image: url(${url})`};
`;

export const FourthArticleContainer = styled.div<{url:string}>`
  width:374px;
  height:240px;
  ${({url}) => url && `background-image: url(${url})`};
`;

export const LeftArticles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position:relative;
  gap: 22px;
  width:755px;
  height: 713px;
`;

export const OrangeWawe = styled.div`
  width: 100%;
  height: 763px;
  position: absolute;
  top:200px;
  z-index: 0;
  &>img{
    width: 100%;
    height: 763px;
  }
`;