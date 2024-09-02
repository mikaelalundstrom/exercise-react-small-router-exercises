import { useParams } from "react-router-dom";

function UserProfile() {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>User {id} </h1>
    </>
  );
}

export default UserProfile;
