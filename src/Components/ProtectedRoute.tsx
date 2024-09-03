import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

export function ProtectedRoute() {
  const { isLoggedIn } = useContext(LoginContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/log-in" />;
}
