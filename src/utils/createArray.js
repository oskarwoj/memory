const createArray = () => {
  let id = 0;
  let key = 0;
  const cardsList = [
    "blue",
    "bullet",
    "coin",
    "fish",
    "flower",
    "monster",
    "owl",
    "star",
  ].reduce((acc, url) => {
    acc.push({
      id: id++,
      key: key,
      url,
    });
    acc.push({
      id: id++,
      key: key++,
      url,
    });
    return acc;
  }, []);

  return cardsList;
};

export const cards = createArray();
