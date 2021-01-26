import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Orbitron', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.mortalDragonSecondary};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KOMBAT QUIZ | ALURA</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Nunito:wght@300;400;600;700;900&family=Poppins:wght@300;400;500;600;700;900&family=Roboto:wght@300;400;500;700;900&family=Ubuntu:wght@300;400;500;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta property="og:image" content="https://raw.githubusercontent.com/matheus-2000/mortalquiz-base/main/kombat-quiz.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
