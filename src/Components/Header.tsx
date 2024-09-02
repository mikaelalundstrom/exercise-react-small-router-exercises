import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/aboutt">Broken Link</NavLink>
        <NavLink to="/old-home">Old Home</NavLink>
        <NavLink to="/log-in">Log in</NavLink>
        <NavLink to="/user/3">User 3</NavLink>
      </nav>
    </>
  );
}

export default Header;
