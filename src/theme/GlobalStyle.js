import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Nunito", sans-serif;
    }

    body {
      background-color: #0A285F;
    }
`;

export default GlobalStyle;
