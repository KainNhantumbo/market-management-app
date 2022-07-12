import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {    
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
    max-width: 100%;
  }

  span, label {
    user-select: none;
  }

  body {
    color: rgb(${({ theme }) => theme.font});
    width: 100%;
    background: rgb(${({ theme }) => theme.background});
    position: relative;
  }

  input, textarea, select {
    background: rgb(${({ theme }) => theme.inner});
    color: rgb(${({ theme }) => theme.font});
  }

  html {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 5px;
    background: none;
    background: rgba(${({ theme }) => theme.secondary}, .3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: rgba(${({ theme }) => theme.alter}, .5);
  }
`;
