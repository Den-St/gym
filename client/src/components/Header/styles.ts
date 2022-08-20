import styled from "styled-components";
import {colors} from "../theme/palette";
import {mixins} from "../theme/fonts";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 4;
`;

export const Container = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.orangePrimary};
  ${mixins.font.primary.light}
  font-size: 19x;
  letter-spacing: 0.003em;
  text-transform: uppercase;
  
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  align-items: center;
  background-color: ${colors.beigeLight};
`;

export const MainHeaderWrapper = styled.div`
  height: 56px;
  margin-left: 91px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const NavigationMenuContainer = styled.nav`
  margin-left: 400px;
  height: 56px;
`;

export const NavigationMenuWrapper = styled.div`
  width: 617px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavButton = styled.a`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mixins.font.third.regular}
`;

export const Actions = styled.div`
  width: calc(31px + 38px + 22px);
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Action = styled.button`
  height: 32px;
  border:none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;