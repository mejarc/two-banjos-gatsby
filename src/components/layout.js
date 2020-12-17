import React from "react";
import { Helmet } from "react-helmet";
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default ({ children }) => (
<div className="page">
  <Helmet>
    <title>Two Banjos At Once</title>
  </Helmet>
<Header />
<Nav />
<main>
  { children }
</main>
<Footer />

</div>
);