import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Montserrat, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 600;
    color: ${props => props.theme.colors.n600};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  .border-red {
    border: 2px solid red;
  }

  .loading-dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-dot {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: ${props => props.theme.colors.n500};
    display: block;
    float: left;
    transition: transform .6s ease-out;
    transform: translate3d(0, 0, 0);
  }

  .loading-dots .loading-dot:nth-child(2){
    margin: 0 4px;
  }

  .active .loading-dot:nth-child(1){
    -webkit-animation: animateDot .6s ease-out;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
  }

  .active .loading-dot:nth-child(2){
    -webkit-animation: animateDot .6s ease-out;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: .08s;
    -webkit-animation-iteration-count: infinite;
  }

  .active .loading-dot:nth-child(3){
    -webkit-animation: animateDot .6s ease-out;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: .16s;
    -webkit-animation-iteration-count: infinite;
  }
  
  @-webkit-keyframes animateDot {
    20% {
      transform: scale(1)
    }
    40% {
      transform: scale(1) translate3d(0, 6px, 0);
    }
    100% {
      transform: scale(1)  translate3d(0, 0, 0)
    }
  } 
`;
