import { useParams } from "react-router-dom";

function UserProfile() {
  let { id } = useParams();
  return (
    <>
      <h1>User </h1>
      <h2>Id: {id}</h2>
    </>
  );
}

export default UserProfile;
