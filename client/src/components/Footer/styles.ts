import styled from "styled-components";
import {mixins} from "../theme/fonts";
import {colors} from "../theme/palette";

export const Container = styled.div<{url:string}>`
  width: 100%;
  box-sizing: border-box;
  height: 646px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 118px;
  ${({url}) => url && `background-image: url(${url});`};
  margin-top: -750px;
  z-index: 6;
`;

export const Wrapper = styled.div`
  width: 83%;
  height: 454px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
    width: 100%;
  height: 364px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>svg{
    width: 100%;
    height: 40px;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Topic =styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items: center;
  color:white;
  &>span:first-child{
    ${mixins.font.primary.bold};
    font-size: 20px;
  }
  &>span{
    font-size: 18px;
    ${mixins.font.primary.medium};
  }
`;

export const Right = styled.div`
  width: 40%;
  gap: 20px;
  height: 454px;
  display: flex;
  flex-direction: column;
  align-items: start;
  color:white;
`;

export const Title =styled.div`
  max-width:385px;
  ${mixins.font.primary.bold};
  font-size: 36px;
`;

export const SubTitle = styled.div`
  max-width:385px;

  font-size: 18px;
  ${mixins.font.primary.regular};
`;

export const Input =styled.input`
  width: 60px;
  height: 100%;
  background:transparent;
  border:none;
  outline: none;
`;

export const InputContainer =styled.div`
  width: 100%;
  height: 74px;
  border: 1px solid ${colors.orangeBorder};
  border-radius: 10px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mixins.font.primary.regular};
  background-color:transparent;
  &>button{
    width: 147px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.orangeBorder};
    color:white;
  }
`;

export const Socials =styled.div`
  width: 163px;
  height: 52px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items:center ;
  
  &>svg{
    width: 53px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${colors.orangeBorder};
  }
`;

export const Descr =styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${mixins.font.primary.medium};
  font-size: 20px;
  border-top: 3px solid white;
`;