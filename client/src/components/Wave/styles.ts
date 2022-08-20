import styled from "styled-components";
import {mixins} from "../theme/fonts";

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