import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Star = styled.div<{$isRest:boolean}>`
  cursor: pointer;
  width: 25px;
  height: 25px;
  &>svg{
    &>path{
      ${({$isRest}) => $isRest && `fill:gray`}
    }
  }
`;