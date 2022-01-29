import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/common/GlobalStyle';
import { darkTheme, lightTheme } from '../components/common/Theme';
darkTheme
// import '../styles/globals.css';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const {theme, setTheme} = useState('light');

  return (
    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
