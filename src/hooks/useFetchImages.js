import { useState, useEffect } from "react";
import { createArray } from "../utils/createArray";
import axios from "axios";
import { API } from "../utils/constants";

const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const cards = createArray(images);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get(API)
        .then((response) => {
          const results = response.data.results;

          setImages(results.map((result) => result.picture.large));
        })
        .catch(() => {
          console.log("check your code");
        });
    };

    fetchUsers();
  }, []);

  return { cards };
};

export default useFetchImages;
