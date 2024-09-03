import { Navigate } from "react-router-dom";

export function OldHome() {
  return (
    <>
      <h1>Old Home</h1>
      <Navigate to="/" />
    </>
  );
}
