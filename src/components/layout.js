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
  </Helmet>
<Header />
<Nav />
<main>
  { children }
</main>
<Footer />

</div>
);