import React from "react";
import { Helmet } from "react-helmet";
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default ({ children }) => (
<div className="page">
  <Helmet>
    <title>Two Banjos At Once</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400&family=Trirong:wght@500&display=swap" rel="stylesheet" /> 
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest"></link>
  </Helmet>
<Header />
<Nav />
<main>
  { children }
</main>
<Footer />

</div>
);