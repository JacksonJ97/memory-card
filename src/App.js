import { useState, useEffect } from "react";

// Components
import Scoreboard from "./components/Scoreboard";
import Grid from "./components/Grid";

// Styles
import GlobalStyle from "./theme/GlobalStyle";

// Hooks
// import useFetch from "./hooks/useFetch";

// Helpers
import shuffleData from "./helpers/shuffleData";

// Data
import { exampleData } from "./config";

const App = () => {
  const [shuffledData, setShuffledData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIDs, setClickedIDs] = useState([]);

  useEffect(() => {
    shuffleData(exampleData, setShuffledData);
  }, []); // When changing to use fetched data, need to list the fetched data as a dependency

  const handleCardClick = (e, data, setData) => {
    shuffleData(data, setData);
    setCurrentScore((currentScore) => currentScore + 1);
    setClickedIDs([...clickedIDs, e.currentTarget.id]);

    if (clickedIDs.includes(e.currentTarget.id)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }

      setCurrentScore(0);
      setClickedIDs([]);
    }
  };

  console.log(clickedIDs);
  console.log("test");

  return (
    <>
      <GlobalStyle />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Grid data={shuffledData} handleCardClick={(e) => handleCardClick(e, shuffledData, setShuffledData)} />
    </>
  );
};

export default App;
