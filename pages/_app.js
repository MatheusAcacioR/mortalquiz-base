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
    font-family: 'Archivo', sans-serif;
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
        <link rel="icon" href="https://raw.githubusercontent.com/matheus-2000/mortalquiz-base/7eca15ae5e45ab218b9d15d036910ffd9cbc24e8/assets/mk-dragon-logo.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Nunito:wght@300;400;600;700;900&family=Poppins:wght@300;400;500;600;700;900&family=Roboto:wght@300;400;500;700;900&family=Ubuntu:wght@300;400;500;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://mortalquiz-base.vercel.app" />
        <meta property="og:title" content="Site quiz mortal Kombat" />
        <meta property="og:site_name" content="Kombat Quiz" />
        <meta property="og:description" content="Veja se vc é digno de levar o prêmio do Mortal Kombat ou seja sera morto por um Fatality!" />
        <meta property="og:image" content="https://github.com/matheus-2000/mortalquiz-base/blob/main/kombat-quiz.png?raw=true" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1599" />
        <meta property="og:image:height" content="899" />
        <meta property="og:image:alt" content="Kombat Quiz" />

        <meta property="twitter:description" content="Veja se vc é digno de levar o prêmio do Mortal Kombat ou seja sera morto por um Fatality!" />
        <meta property="twitter:image" content="https://github.com/matheus-2000/mortalquiz-base/blob/main/kombat-quiz.png?raw=true" />
        <meta property="twitter:creator" content="Matheus Acácio Rodrigues" />
        <meta property="twitter:site" content="Kombat Quiz" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
