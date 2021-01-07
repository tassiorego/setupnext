import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import defaultTheme from '../styles/themes/default';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
