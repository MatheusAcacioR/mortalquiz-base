import styled from 'styled-components';
import Head from 'next/head';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #000000DA;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  font-family: 'Poppins', sans-serif;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FooterWrapper {...props}>
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
        <p>
          Orgulhosamente criado durante
          {' '}
          a
          {' '}
          <a href="https://www.alura.com.br/">
            <span>Imersão React da Alura</span>
          </a>
        </p>
      </FooterWrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Nunito:wght@300;400;600;700;900&family=Poppins:wght@300;400;500;600;700;900&family=Roboto:wght@300;400;500;700;900&family=Ubuntu:wght@300;400;500;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
    </>
  );
}
