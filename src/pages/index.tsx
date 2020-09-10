import Head from 'next/head';
import redis from '../assets/redis.png';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>Olá mundo</h1>
        <img src={redis} />
      </main>
    </div>
  );
};

export default Home;
