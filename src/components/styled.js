import styled, { css } from "styled-components";
import background from "../images/ipad.png";
import back from "../images/back.png";
import background_small from "../images/ipad_small.png";

export const Main = styled.div`
  font-family: "Lato", sans-serif;
  margin: 0 auto;
  max-width: 700px;
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
    background-image: url("${background_small}");
    font-size: 45px;
  }
`;

export const Header = styled.h1`
  font-size: 70px;

  @media (max-width: 550px) {
    font-size: 45px;
  }
`;

export const Button = styled.button`
  background-color: black;
  border: 2px solid white;
  font-size: 30px;
  color: white;
  transition: 0.5s;

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
  transform: rotateY(180deg);
`;

export const Card = styled.div`
  height: 120px;
  cursor: pointer;
  margin: 5px;
  background-image: url("${back}");
  rotate: (180deg);
  background-size: cover;
  background-position: center;
  transition: all 0.2s linear;

  @media (max-width: 550px) {
    height: 80px;
    width: 80px;
  }

  @media (max-width: 400px) {
    height: 70px;
    width: 70px;
    margin: 2px;
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

  @media (max-width: 550px) {
    font-size: 25px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Player = styled.div`
  margin-top: 10px;
  width: 200px;
  height: 20px;
  align-self: center;
`;
