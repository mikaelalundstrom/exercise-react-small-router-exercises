import { useParams } from "react-router-dom";

export function UserProfile() {
  let { id } = useParams();
  return (
    <>
      <h1>User </h1>
      <h2>Id: {id}</h2>
      <p>Woah, I got that id from the url Params!</p>
    </>
  );
}
