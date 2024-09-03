import { NavLink, Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to="./stats">Stats</NavLink>
        <NavLink to="./settings">Settings</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
