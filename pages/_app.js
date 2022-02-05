import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from "styled-components";
import { UserProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  ); 
};

export default MyApp;