import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #121212;
    color: white;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
