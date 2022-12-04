import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-primary: #33794A;
    --color-secondary: #83AF38;

    --color-active: #FFB31A;
    --color-gray: #3b454f;
    --color-gray-secondary: ##737D86;

    --color-bg-button: #AFE3A0;

    --content-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-gray);
  }

  body, input, button, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-gray);
  }
`
