import React from "react";
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default ({ children }) => (
<div className="page">
<Header />
<Nav />
<main>
  { children }
<Footer />
</main>
</div>
);