// Components
import Scoreboard from "./components/Scoreboard";
import Grid from "./components/Grid";

// Styles
import GlobalStyle from "./theme/GlobalStyle";

// Hooks
import useFetch from "./hooks/useFetch";

// Helpers
import formatData from "./helpers/formatData";

const App = () => {
  const [data] = useFetch(12);
  let formattedData = [];

  if (data) {
    formattedData = formatData(data);
  }

  console.log(data);
  console.log(formattedData);
  return (
    <>
      <GlobalStyle />
      <Scoreboard />
      <Grid data={formattedData} />
    </>
  );
};

export default App;
