import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import background from "../images/ipad.png";
import back from "../images/back.png";
import backgroundSmall from "../images/ipad_small.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`;

export const Main = styled.div`
  font-family: "Lato", sans-serif;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  text-align: center;
  color: white;

  @media (max-width: 550px) {
    background-image: url("${backgroundSmall}");
    font-size: 45px;
  }
`;

export const Header = styled.h1`
  font-size: 70px;

  @media (max-width: 550px) {
    font-size: 50px;
  }
`;

export const Button = styled.button`
  background-color: black;
  border: 2px solid white;
  font-size: 30px;
  color: white;
  transition: 0.5s;
  box-shadow: 0 0 10px 0px white;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Game = styled.div`
  max-width: 500px;
  width: 90vw;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin-top: 12px;
  /* transform: rotateY(180deg); */

  @media (max-width: 550px) {
    justify-items: center;
  }
`;

export const Card = styled.div`
  height: 120px;
  cursor: pointer;
  margin: 5px;
  background-image: url("${back}");
  rotate: (180deg);
  background-size: cover;
  background-position: center;
  transition: all 0.4s ;

  @media (max-width: 550px) {
    height: 100px;
    width: 100px;
    margin: 5px 0;
  }

  @media (max-width: 450px) {
    height: 70px;
    width: 70px;
  }

  ${({ visible }) =>
    visible &&
    css`
      transform: rotateY(180deg);
    `}
  
`;

export const StyledDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 35px;
`;

export const GameBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 35px;
  padding: 0 30px;

  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Player = styled.div`
  margin-top: 15px;
  align-self: center;
`;

export const WinBoard = styled.div`
  font-size: 50px;

  @media (max-width: 550px) {
    font-size: 40px;
  }

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;
