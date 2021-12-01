import { useState, useEffect } from "react";
import formatData from "../helpers/formatData";

const useFetch = (amount) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    let controller = new AbortController();

    const getPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amount}`, { signal: controller.signal });
        const results = await response.json();
        const data = results.results;
        const formattedData = formatData(data);
        setFetchedData(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemons();

    return () => controller.abort();
  }, [amount]);

  return [fetchedData];
};

export default useFetch;
