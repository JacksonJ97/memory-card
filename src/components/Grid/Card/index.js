import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  color: #000000;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);
  background-color: #ffcc00;
  transition: transform 200ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  img {
    display: block;
    margin: 0 auto;
    width: 96px;
    height: 96px;
  }

  p {
    text-align: center;
    margin: 0.25em 0;
    font-size: 1.25rem;
  }
`;

const Card = (props) => {
  return (
    <Wrapper onClick={props.handleCardClick} id={props.id}>
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </Wrapper>
  );
};

export default Card;
