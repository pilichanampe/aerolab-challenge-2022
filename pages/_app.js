import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from "styled-components";
import { AppWrapper } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  ) 
}
export default MyApp;