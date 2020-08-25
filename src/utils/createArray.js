export const createArray = (images) => {
  let id = 0;
  let key = 0;
  const cardsList =
    images &&
    images.reduce((acc, url) => {
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


