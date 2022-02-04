import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 80px;
    font-family: -apple-system, Montserrat, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 600;
    max-width: 1464px;
    color: ${props => props.theme.colors.n600};
    display: flex;
    flex-direction: column;    
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 375px) {
    border: 2px solid red;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 1024px) {
    border: 2px solid green;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 1920px) {
    border: 2px solid purple;
  }
`;
