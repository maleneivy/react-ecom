import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    --color-primary: #C2D7E0;
    --color-secondary: #4C656F;
    --color-tertiary: #628391;
    --color-red: #FF3707;
    --color-light: #FDFDFD;
    --font-primary: 'Khmer MN', sans-serif;
    --font-secondary: 'apertura', sans-serif;
    height: 100%;
  }

  body{
    height: 100%;
    margin: 0;
    font-family: var(--font-secondary);
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1 {
    font-family: var(--font-primary)
  }

  p{
    font-weight: 400;
  }

  .discounted-price {
    display: flex; 
    flex-direction: column;
  }
  
  .old-price {
    text-decoration: line-through;
    font-size: calc(80%)
  }
  
  .on-sale-price {
    color: #FF3707;
  }
  
  .message {
    padding: 1rem;
    text-align: center;
  }
  
  .success {
    background-color: lightgreen;
  }
  
  .error {
    background-color: red;
  }
  
  .info {
    background-color: lightblue;
    width: 100%;
  }
  
`
export default GlobalStyle;
