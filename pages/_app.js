import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from "styled-components";
import { UserProvider } from '../context/UserContext';
import { ToastProvider } from '../context/ToastContext';
import { ProductsProvider } from '../context/ProductsContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastProvider>
        <ProductsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ProductsProvider>
      </ToastProvider>
    </UserProvider>
  ); 
};

export default MyApp;