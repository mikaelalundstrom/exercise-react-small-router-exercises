import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>404 Not found</h1>
      <p>The page you're looking for doesn't exist, sorry! :-(</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
