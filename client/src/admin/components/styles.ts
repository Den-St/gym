import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  font-size: 20px;
  font-family: Futura;
  font-weight: 500;
  position: fixed;
  padding-top: 50px;
  background-color: #e6e6fa;
`;

export const MenuItem = styled.span<{isActive:boolean}>`
  &:hover {
    width: 100%;
    color: #fff;
    background-color: #3a3939;
  }

  transition: 0.2s all;
  cursor: pointer;
  text-align: center;
  padding: 4px 6px;
  box-sizing: border-box;
  ${({isActive}) => isActive && `
      width: 100%;
      color: #fff;
    background-color: #3a3939;
    `}
`;

export const ItemsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;

export const ItemContainer = styled.div`
  padding: 5px;
  box-sizing: border-box;
  font-size: 20px;
  font-family:Futura;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border: 2px dashed black;
`;

export const AdminButton = styled.div`
  padding: 3px;
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid black;
  &>button{
  }
`;

export const DirContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap:30px;
  &>button{
    width: 100px;
  }
`;


export const AddingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  &>div{
    display: flex;
    flex-direction: row;
    gap:5px;
  }
`;

export const RemovingFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:20px;
`;