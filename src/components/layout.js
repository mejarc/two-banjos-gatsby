import React from "react";
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';
import 'fontsource-piazzolla/500.css';
import 'fontsource-piazzolla/700.css';

export default ({ children }) => (
<div className="page">
<Header />
<Nav />
<main>
  { children }
</main>
<Footer />

</div>
);