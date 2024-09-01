import Head from 'next/head';
import TicTacToe from '../components/TicTacToe';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tic-Tac-Toe Game</title>
        <meta name="description" content="A simple Tic-Tac-Toe game using Next.js, Tailwind CSS, and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TicTacToe />
    </div>
  );
}
