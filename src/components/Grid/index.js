import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Card from "./Card";

// Helpers
import shuffleData from "../../helpers/shuffleData";

// Styles
const Wrapper = styled.div`
  display: grid;
  width: 648px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 24px;
`;

const Grid = (props) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    shuffleData(props.data, setShuffledData);
  }, [props.data]);

  return (
    <Wrapper>
      {shuffledData.map((element, index) => (
        <Card name={element.name} img={element.img} key={index} handleShuffle={() => shuffleData(shuffledData, setShuffledData)} />
      ))}
    </Wrapper>
  );
};

export default Grid;
