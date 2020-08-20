import { cards } from "./createArray";
import { CARDSNUMBER } from "./constants";
import { cardsArray } from "../components/App";

export const setCards = () => {
  const newCards = cards.slice(0, CARDSNUMBER);

  for (let i = 0; i < CARDSNUMBER; i++) {
    let random = Math.floor(Math.random() * newCards.length);

    cardsArray.push(newCards[random]);
    newCards.splice(random, 1);
    cardsArray[i].id = i;
  }
};
