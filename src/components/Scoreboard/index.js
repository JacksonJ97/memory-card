import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 2em auto;
`;

const Scoreboard = (props) => {
  return (
    <Wrapper>
      <div className="current-score">Current Score: {props.currentScore}</div>
      <div className="best-score">Best Score: {props.bestScore}</div>
    </Wrapper>
  );
};

export default Scoreboard;
