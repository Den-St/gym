import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(182, 180, 180, 0.2);

  & > div {
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
    & > input {
      width: 80%;
      height: 50px;
      font-weight: 500;
      font-size: 20px;
      font-family: Futura;
    }
    & > button {
      width: 60%;
      height: 70px;
      border-radius: 3px;
      border: #4077d9;
      transition: 0.3s;
      background-color: white;
      font-family: Futura;
      font-size: 25px;
      cursor: pointer;
      &:hover {
        background-color: #4077d9;
        border: #305eb2;
        color:white;
      }
    }
  }
`;