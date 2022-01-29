import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* css body */
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, Montserrat, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  max-width: 1464px;
  color: ${props => props.theme.disabled};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;