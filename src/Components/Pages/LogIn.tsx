import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";

export function LogIn() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  return (
    <>
      <h1>{isLoggedIn ? "Log Out" : "Log In"}</h1>
      <button onClick={() => setIsLoggedIn!(!isLoggedIn)}>
        {" "}
        {isLoggedIn ? "Log out" : "Log in"}{" "}
      </button>
      {isLoggedIn ? (
        <p>
          You are logged in. View <Link to="/dashboard">Dashboard</Link>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </>
  );
}
