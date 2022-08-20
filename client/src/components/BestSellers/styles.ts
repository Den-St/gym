import styled from "styled-components";
import {mixins} from "../theme/fonts";
import {colors} from "../theme/palette";

export const BestSellersContainer = styled.div`
  width: 100%;
  height: 1168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  padding-top: 84px;
  margin-top:-77px;
  margin-bottom: -122px;
`;

export const Header = styled.div`
  ${mixins.font.anton.regular}
  font-size:55px;
  color:${colors.darkBlue};
  text-transform: uppercase;
  z-index: 1;
`;

export const ItemsContainer = styled.div`
  width: 57%;
  height: 514px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemContainer = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image =styled.div`
  width: 250px;
  height: 386px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>img{
    max-width: 245px;
    max-height: 275px;
  }
`;


export const Name=styled.div`
  ${mixins.font.third.bold};
  font-size: 24px;
  color:black;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

export const StarsReview = styled.div`
  width: 114px;
  height: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  &>svg{
    height: 21px;
  }
`;

export const BottomHeader = styled.div`
  ${mixins.font.primary.bold};
  max-width: 517px;
  font-size: 50px;
  color:${colors.darkBlue};
  text-transform: uppercase;
  text-align: center;
  margin-top: 100px;
`;

export const BottomSubHeader = styled.div`
  ${mixins.font.primary.bold};
  font-size: 16px;
  color:${colors.darkBlue};
`;

export const Wave =styled.div`
  width: 100%;
  height: 330px;
  position: absolute;
  top:0;
  z-index: 0;
  &>svg{
    width: 100%;
    height: 100%;
  }
`;

export const HugeWave = styled.div`
  width: 100%;
  height: 774px;
  position: absolute;
  z-index: -1;
  top:356px;
  &>svg{
    width: 100%;
    height: 100%;
  }
`;