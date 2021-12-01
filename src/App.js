import { useState, useEffect } from "react";

// Components
import Scoreboard from "./components/Scoreboard";
import Grid from "./components/Grid";

// Styles
import GlobalStyle from "./theme/GlobalStyle";

// Hooks
import useFetch from "./hooks/useFetch";

// Helpers
import shuffleData from "./helpers/shuffleData";

const App = () => {
  const [fetchedData] = useFetch(9);
  const [shuffledData, setShuffledData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIDs, setClickedIDs] = useState([]);

  useEffect(() => {
    shuffleData(fetchedData, setShuffledData);
  }, [fetchedData]);

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

  return (
    <>
      <GlobalStyle />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {fetchedData ? (
        <Grid data={shuffledData} handleCardClick={(e) => handleCardClick(e, shuffledData, setShuffledData)} />
      ) : (
        <div className="error">Couldn't fetch Pokemons</div>
      )}
    </>
  );
};

export default App;
