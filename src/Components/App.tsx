import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      <Header />
      <Outlet context={[isLoggedIn, setIsLoggedIn]} />
    </>
  );
}

export default App;
