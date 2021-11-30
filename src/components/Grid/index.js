import styled from "styled-components";

// Components
import Card from "./Card";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Grid = (props) => {
  return (
    <Wrapper>
      {props.data.map((element, index) => (
        <Card name={element.name} img={element.img} key={index} />
      ))}
    </Wrapper>
  );
};

export default Grid;
