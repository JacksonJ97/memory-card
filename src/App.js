// import { useState, useEffect } from "react";

// Components
import Scoreboard from "./components/Scoreboard";
import Grid from "./components/Grid";

// Styles
import GlobalStyle from "./theme/GlobalStyle";

// Hooks
// import useFetch from "./hooks/useFetch";

// Helpers
// import formatData from "./helpers/formatData";

// Data
import { exampleData } from "./config";

const App = () => {
  // const [fetchedData] = useFetch(12);
  // const [formattedData, setFormattedData] = useState([]);
  // const [shuffledData, setShuffledData] = useState([]);

  // useEffect(() => {
  //   if (fetchedData) {
  //     const formattedFetchedData = formatData(fetchedData);
  //     setFormattedData(formattedFetchedData);
  //   }
  // }, [fetchedData]);

  // useEffect(() => {
  //   const handleShuffle = () => {
  //     const formattedDataCopy = [...formattedData];

  //     for (let i = formattedDataCopy.length - 1; i > 0; i--) {
  //       const randomIndex = Math.floor(Math.random() * (i + 1));
  //       const temp = formattedDataCopy[i];
  //       formattedDataCopy[i] = formattedDataCopy[randomIndex];
  //       formattedDataCopy[randomIndex] = temp;
  //     }

  //     setShuffledData(formattedDataCopy);
  //     console.log(formattedDataCopy);
  //   };

  //   handleShuffle();
  // }, [formattedData]);

  // console.log(fetchedData);
  // console.log(formattedData);
  return (
    <>
      <GlobalStyle />
      <Scoreboard />
      <Grid data={exampleData} />
    </>
  );
};

export default App;
