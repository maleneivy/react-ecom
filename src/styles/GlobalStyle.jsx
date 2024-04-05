import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    --color-primary: #C2D7E0;
    --color-secondary: #4C656F;
    --color-tertiary: #628391;
    --color-red: #FF3707;
    --color-light: #FDFDFD;
    --color-light-green: #C2E0C2;
    --color-light-blue: #E7F8FF;
    --font-primary: 'Khmer MN', sans-serif;
    --font-secondary: 'apertura', sans-serif;
    --font-size-large: 2em;
    --font-size-medium: 1.5em;
    --font-size-small: 1.17em;
    --font-size-xSmall: 1em;
    --border-radius-smooth: 9px;
    height: 100%;
  }

  body{
    height: 100%;
    margin: 0;
    font-family: var(--font-secondary);
    color: var(--color-secondary);
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1 {
    font-family: var(--font-primary);
    font-size: var(--font-size-large);
  }

  h2 {
    font-size: var(--font-size-medium);
  }

  h3 {
    font-size: var(--font-size-small);
  }

  p{
    font-weight: 400;
    font-size: var(--font-size-xSmall);
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
    color: var(--color-red);
  }
  
  .message {
    padding: 1rem;
    text-align: center;
  }
  
  .success {
    background-color: var(--color-light-green);
  }
  
  .error {
    background-color: var(--color-red);
    color: var(--color-light);
    font-weight: 700;
  }
  
  .form-error {
    color: var(--color-red);
  }

  .info {
    background-color: var(--color-primary);
  }

  .added-product-success {
    padding: 0.3rem;
    background-color: var(--color-light-green);
    border-radius: var(--border-radius-smooth);
    margin-top: 0.7rem;
  }
  
`
export default GlobalStyle;
