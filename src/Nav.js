import './Nav.css';

function Nav() {
  return (
    <nav>
        <a href="#"><h6>DI@Tech'<span className="year">24</span></h6></a>
        <div className="nav-links">
          <a href="#">Mission</a>
          <a href="#">Event details</a>
        </div>
    </nav>
  );
}

export default Nav;
