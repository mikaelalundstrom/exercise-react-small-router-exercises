import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/aboutt">Broken Link</Link>
        <Link to="/old-home">Old Home</Link>
        <Link to="/log-in">Log in</Link>
      </nav>
    </>
  );
}

export default Header;
