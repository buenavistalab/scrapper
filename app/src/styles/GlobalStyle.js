import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
    }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Source Serif Pro', serif;
  }

  body, input, button {
    font-family: 'Rubik', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: 'Source Serif Pro', serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: salmon;
  }
  ::selection {
    background: #071a52;
    color: #17b978;
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    background-color: rgba(0, 0, 0, 0.75) !important;
  }

  .ReactModal__Content.ReactModal__Content--after-open {
    border: 5px solid salmon !important;
    border-radius: 10px !important;
    inset: 100px !important;
  }

  @media (max-width: 768px) {
    .ReactModal__Content.ReactModal__Content--after-open {
    border: 2px solid salmon !important;
    border-radius: 10px !important;
    inset: 30px !important;
  }
  }
`;
