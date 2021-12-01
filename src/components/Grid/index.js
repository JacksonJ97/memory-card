import styled from "styled-components";

// Components
import Card from "./Card";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, 200px);
  }
`;

const Grid = (props) => {
  return (
    <Wrapper>
      {props.data.map((element, index) => (
        <Card name={element.name} img={element.img} handleCardClick={props.handleCardClick} id={element.id} key={index} />
      ))}
    </Wrapper>
  );
};

export default Grid;
