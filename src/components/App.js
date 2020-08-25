import React, { useState, useEffect } from "react";
import { Main, Header, Button, GlobalStyle } from "../assets/styled";
import Board from "./Board";
import { setCards } from "../utils/setCards";
import { createArray } from "../utils/createArray";
import axios from "axios";

const API = "https://randomuser.me/api/?results=8";

export const cardsArray = [];

const App = () => {
  const [start, setStart] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get(API)
        .then((response) => {
          const usersData = response.data.results;

          setImages(usersData.map((user) => user.picture.large));
        })
        .catch(() => {
          console.log("check your code");
        });
    };

    fetchUsers();
  }, []);

  const cards = createArray(images);

  const gameStart = () => {
    setCards(cards);
    setStart(true);
  };

  return (
    <Main>
      <GlobalStyle />
      {!start ? (
        <>
          <Header>Mario Memory</Header>
          <Button onClick={() => gameStart()}>START</Button>
        </>
      ) : (
        <Board></Board>
      )}
    </Main>
  );
};

export default App;
