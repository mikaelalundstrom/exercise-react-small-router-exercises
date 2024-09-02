import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav>
        <Link to="./stats">Stats</Link>
        <Link to="./settings">Settings</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Dashboard;
