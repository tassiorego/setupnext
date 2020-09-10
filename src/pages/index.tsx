import Head from 'next/head';
import Logo from '../assets/logo.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next Template</title>
      </Head>
      <Logo />
      <h1>Welcome to Next Template</h1>
    </Container>
  );
};

export default Home;
