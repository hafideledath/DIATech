import logo from './DI@TECH.webp';

import './Nav.css';

function Nav() {
  return (
    <nav>
        <a href="/" id="logo"><img src={logo} alt="hi" /></a>
        <div className="nav-links">
          <a href="/team">Team</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
    </nav>
  );
}

export default Nav;
