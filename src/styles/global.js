import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(192.05deg, #47BFDF 0%, #4A91FF 100%) no-repeat;
    -webkit-font-smoothing: antialiased;

    width: 100%;
    min-height: 100vh;
  }

  body, input, textarea, button {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;