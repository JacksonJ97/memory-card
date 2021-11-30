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
  return (
    <Wrapper>
      {props.data.map((element, index) => (
        <Card name={element.name} img={element.img} key={index} />
      ))}
    </Wrapper>
  );
};

export default Grid;
