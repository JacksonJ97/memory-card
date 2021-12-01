import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  img {
    display: block;
    margin: 0 auto;
  }

  p {
    text-align: center;
  }
`;

const Card = (props) => {
  return (
    <Wrapper onClick={props.handleShuffle}>
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </Wrapper>
  );
};

export default Card;
