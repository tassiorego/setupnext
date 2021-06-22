import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '../styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
