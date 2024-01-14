import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    
    font-family: 'League Spartan', sans-serif;
    font-size: 1.0625rem;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  .wrapper {
    width: 80%;
    height: 300px;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    margin-block: 6rem;
    text-align: center;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

@media screen and (min-width: 768px) {
  .wrapper {
    width: 80%
  }
  .header {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .header__left {
    width: 35%;
    text-align: left;
  }

  .header__right {
    width: 65%;
    position: relative;
    background-color: orange;
    justify-content: center;
    /* display: flex; */
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 1rem;

  }

}

`;
