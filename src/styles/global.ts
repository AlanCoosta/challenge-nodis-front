import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import nodisBackground from './../assets/images/nodisBackground.jpeg';

// Font Roboto
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

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
  }

  body {
    background: #fff url(${nodisBackground})no-repeat right top fixed;

    -webkit-font-smoothing: antialiased;
  }



  body, input, button {
    font: 14px 'Rubik', sans-serif;
  }

  h1,h3 {
    font-family: 'IBM Plex Sans', sans-serif;
  }



  #root {
    /* max-width: 1020px; */
    /* margin: 0 auto; */
    padding: 0 20px 50px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
