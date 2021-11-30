import useFetch from "./hooks/useFetch";
import formatData from "./helpers/formatData";

const App = () => {
  const [data] = useFetch(12);
  let formattedData = [];

  if (data) {
    formattedData = formatData(data);
  }

  console.log(data);
  console.log(formattedData);
  return <div>Hello World!</div>;
};

export default App;
