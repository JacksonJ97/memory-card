import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Card from "./Card";

// Styles
const Wrapper = styled.div`
  display: grid;
  width: 648px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 24px;
`;

const Grid = (props) => {
  const [data, setData] = useState(props.data);

  const handleShuffle = () => {
    const dataCopy = [...data];

    for (let i = dataCopy.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = dataCopy[i];
      dataCopy[i] = dataCopy[randomIndex];
      dataCopy[randomIndex] = temp;
    }

    setData(dataCopy);
    console.log("handleShuffle in the Card component");
  };

  useEffect(() => {
    if (data === props.data) {
      const handleShuffle = () => {
        const dataCopy = [...data];

        for (let i = dataCopy.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          const temp = dataCopy[i];
          dataCopy[i] = dataCopy[randomIndex];
          dataCopy[randomIndex] = temp;
        }
        console.log("handleShuffle in the useEffect");
        setData(dataCopy);
      };

      handleShuffle();
    }
  }, [data, props.data]);

  return (
    <Wrapper>
      {data.map((element, index) => (
        <Card name={element.name} img={element.img} key={index} handleShuffle={handleShuffle} />
      ))}
    </Wrapper>
  );
};

export default Grid;
