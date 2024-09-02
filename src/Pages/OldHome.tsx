import { Navigate } from "react-router-dom";

function OldHome() {
  return (
    <>
      <h1>Old Home</h1>
      <Navigate to="/" />
    </>
  );
}

export default OldHome;
