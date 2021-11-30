import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
`;

const Card = (props) => {
  return (
    <Wrapper>
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </Wrapper>
  );
};

export default Card;
