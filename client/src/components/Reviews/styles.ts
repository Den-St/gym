import styled from "styled-components";
import {colors} from "../theme/palette";
import {mixins} from "../theme/fonts";

export const ReviewsComponentContainer = styled.div`
  width: 100%;
  height: 354px;
  background-color: ${colors.lightGray};
  padding: 44px 56px 65px 75px;
  box-sizing: border-box;
`;

export const TopPartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${colors.borderGray};
  margin-bottom: 26px;
`;

export const Header = styled.div`
  margin-right: 48%;
  display: flex;
  justify-content: start;
  align-items: center;
  ${mixins.font.third.regular}
  font-size:24px;
  line-height: 120%;
`;

export const Stars = styled.div`
  width: 114px;
  height: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &>svg{
    height: 21px;
  }
`;

export const NumberOfReviews = styled.div`
  height: 20px;
  ${mixins.font.DMSans.regular};
  font-size: 16px;
  line-height: 125%;
  padding: 0 17px 0 28px;
`;

export const Arrows =styled.div`
  width: 25px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left:30px ;
  &>svg{
    height: 13px;
  }
`;

export const ReviewsPartContainer =styled.div`
    width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 395px;
  height: 176px;
`;

export const CommentHeader =styled.div`
  font-size: 24px;
  ${mixins.font.third.bold}
  line-height:29px;
  width:67%;
`;
export const Date = styled.div`
  ${mixins.font.DMSans.regular};
  font-size: 20px;
  color:${colors.dateGray}
`;

export const Image =styled.div`
  width:81px;
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>img{
    max-width: 70px;
    height: 87px;
  }
`;

export const Comment = styled.div`
  width: 300px;
  height: 86px;
  text-align: justify;
  ${mixins.font.DMSans.regular};
  font-size: 18px;
  color: ${colors.commentColor};
`;

export const StarsReview = styled.div`
  width: 114px;
  margin-right: 100px;
  height: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &>svg{
    height: 21px;
  }
`;