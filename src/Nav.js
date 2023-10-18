import './Nav.css';

function Nav() {
  return (
    <nav>
        <a href="/"><h6>DI@TECH'<span className="year">24</span></h6></a>
        <div className="nav-links">
          <a href="/mission">Mission</a>
          <a href="/events">Events</a>
        </div>
    </nav>
  );
}

export default Nav;
