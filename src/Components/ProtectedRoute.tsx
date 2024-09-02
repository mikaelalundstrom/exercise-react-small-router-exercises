import { Navigate, Outlet, useOutletContext } from "react-router-dom";

function ProtectedRoute() {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  return isLoggedIn ? <Outlet /> : <Navigate to="/log-in" />;
}

export default ProtectedRoute;
