import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2em auto;
  color: #ffffff;
  font-size: 1.25rem;

  .current-score {
    padding: 1em;
    background-color: #0075be;
    border-radius: 6px;
    width: 200px;
    margin: 24px;
    text-align: center;
  }

  .best-score {
    padding: 1em;
    background-color: #ffcc00;
    border-radius: 6px;
    color: #000000;
    width: 200px;
    margin: 24px;
    text-align: center;
  }

  @media (max-width: 490px) {
    flex-direction: column;

    .current-score {
      margin: 12px;
    }

    .best-score {
      margin: 12px;
    }
  }
`;

const Scoreboard = (props) => {
  return (
    <Wrapper>
      <p className="current-score">Current Score: {props.currentScore}</p>
      <p className="best-score">Best Score: {props.bestScore}</p>
    </Wrapper>
  );
};

export default Scoreboard;
