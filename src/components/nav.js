import React from 'react';
import { Link } from 'gatsby';
import navStyles from './nav.module.css';

const toggleIcon = () => {
  let hidden = document.querySelector('.hidden');
  hidden.classList.toggle('show');
};
export default () => (
  <nav className={navStyles.nav} role="navigation" onClick={toggleIcon}>
      <span aria-hidden="true" className={navStyles.icon}></span>
      <ul className={`hidden`}>
        <li className={navStyles.item}><Link activeClassName="active" to="/about-me/">About me</Link></li>
        <li className={navStyles.item}><Link  activeClassName="active" to="/portfolio/">Portfolio</Link></li>
        <li className={navStyles.item}><a href="mailto:mejarc@gmail.com?subject=ping%20from%20twobanjos">Ping</a></li>
        <li className={navStyles.item}><Link  activeClassName="active" to="/about-site/">About this web site</Link></li>
        </ul>
    </nav>
);