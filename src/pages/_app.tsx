import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
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
