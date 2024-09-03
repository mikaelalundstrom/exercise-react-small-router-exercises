import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

export function Header() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/old-home">Old Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/aboutt">Broken Link</NavLink>
          <NavLink to="/user/3">User 3</NavLink>
          <NavLink to="/log-in">{isLoggedIn ? "Log Out" : "Log In"}</NavLink>
          <NavLink to="/sign-up/">Sign Up</NavLink>
        </nav>
      </header>
    </>
  );
}
