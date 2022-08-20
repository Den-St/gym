import styled from "styled-components";
import {mixins} from "../theme/fonts";
import {colors} from "../theme/palette";

export const Button = styled.button`
  border:none;
  outline: none;
  width: 211px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mixins.font.primary.bold};
  transform: skewX(-30deg);
  background-color: ${colors.orangePrimary};
  color: white;
  &>span{
    font-size: 35px;
    ${mixins.font.primary.bold};
    transform: skewX(30deg);
  }
`;