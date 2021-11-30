import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 2em auto;
`;

const Scoreboard = () => {
  return (
    <Wrapper>
      <div className="current-score">Current Score: 0</div>
      <div className="best-score">Best Score: 0</div>
    </Wrapper>
  );
};

export default Scoreboard;
