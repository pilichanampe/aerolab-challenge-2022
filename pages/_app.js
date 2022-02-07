import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from "styled-components";
import { UserProvider } from '../context/UserContext';
import { ProductsProvider } from '../context/ProductsContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ProductsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ProductsProvider>
    </UserProvider>
  ); 
};

export default MyApp;