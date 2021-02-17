import { createGlobalStyle, keyframes } from 'styled-components';

const animateBackground = keyframes`
  0% { background-position: left; }
  100% { background-position: right; }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    animation: ${animateBackground} 10s infinite alternate;
    background-image: linear-gradient(to right, #0a2700, #003a2a, #004c86, #0057eb, #0016ff);
    background-size: 400%;
    color: rgb(15, 20, 0);
    font-family: sans-serif;
    min-height: 100vh;
    width: 100vw;
  }
`;