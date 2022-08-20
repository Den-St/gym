import styled from "styled-components";

export const MainContainer = styled.main<{admin:boolean}>`
  display: flex;
  flex-direction:column;
  ${({admin}) => admin ? `padding-top: 127px;` : `padding-top:0`};
  min-height: 100vh;
  box-sizing: border-box;
`;