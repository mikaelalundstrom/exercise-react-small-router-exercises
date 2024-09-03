import { useOutletContext } from "react-router-dom";

function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  return (
    <>
      <h1>Log In</h1>
      <button onClick={() => setIsLoggedIn((prev: boolean) => !prev)}>
        {" "}
        {isLoggedIn ? "Log out" : "Log in"}{" "}
      </button>
      {isLoggedIn ? <p>You are logged in</p> : <p>You are not logged in.</p>}
    </>
  );
}

export default LogIn;
