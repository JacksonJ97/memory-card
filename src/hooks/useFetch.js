import { useState, useEffect } from "react";

const useFetch = (amount) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amount}`);
        const results = await response.json();
        const pokemonData = results.results;
        setFetchedData(pokemonData);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemons();
  }, [amount]);

  return [fetchedData];
};

export default useFetch;
