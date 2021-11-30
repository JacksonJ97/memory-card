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
  overflow: hidden;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 6px;
    box-shadow: 4px 4px 12px 2px rgba(0, 0, 0, 0.2);
    transition: opacity 200ms ease-in-out;
  }

  :hover {
    transform: scale(1.1);
  }

  :hover:after {
    opacity: 1;
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
