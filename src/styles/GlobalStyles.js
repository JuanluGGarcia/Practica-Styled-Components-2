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
    width: 85%;
    /* height: 300px; */
    max-width: 1110px;
    margin: 30px auto;
    /* padding-inline: 2rem; */
    /* margin-block-end: 2rem; */
    /* text-align: center; */
    /* background-color: lightblue; */
  }
  .header {
      display: flex;
      flex-direction: column;
  }

  .wrapperCards {
    /* margin: 0; */
    width: 100%;
    height: 230px;
    /* max-width: 1110px; */
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    gap: .5rem;
    margin-block-end: 1rem;
    /* background-color: lightgreen; */
  }

  

@media screen and (min-width: 768px) {

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
    width: 55%;
    /* position: relative; */
    /* background-color: orange; */
    /* justify-content: center; */
    /* display: flex; */
  }
  .wrapperCards {
    flex-direction: row;
  }

  
  

  /* main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 1rem;

  } */

}

`;
