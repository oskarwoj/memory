export const preload = (srcArray) => {
  srcArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
