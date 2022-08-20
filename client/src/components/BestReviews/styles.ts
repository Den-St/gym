import styled from "styled-components";
import {colors} from "../theme/palette";
import {mixins} from "../theme/fonts";

export const BestReviewsContainer = styled.div`
  height: 307px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-top: 28px solid ${colors.orangeBorder};
  border-bottom: 28px solid ${colors.orangeBorder};
  gap:44px;
`;

export const ReviewsContainer = styled.div`
  width: 78%;
  height: 294px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -151px;
  z-index: 3;
`;

export const ReviewContainer = styled.div<{url:string}>`
  ${({url}) => url && `background-image: url(${url})`};
  width:30%;
  height:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 33px 26px 50px 13px;
`;

export const Header = styled.div`
  ${mixins.font.primary.bold};
  font-size: 30px;
  color:${colors.darkBlue};
  width: 100%;
  text-align: left;
  margin-bottom: 11px;
`;

export const Content =styled.div`
  ${mixins.font.primary.medium};
  font-size: 20px;
  color:${colors.textGray};
  margin-bottom: 45px;
  width: 100%;
`;

export const Author = styled.div`
  width:166px;
  text-align: start;
  ${mixins.font.primary.regular};
  font-size: 18px;
  
`;

export const SeeAll = styled.div`
  ${mixins.font.third.bold};
  font-size: 20px;
  color:${colors.darkBlue};
`;