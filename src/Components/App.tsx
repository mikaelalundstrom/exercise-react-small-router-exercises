import { useState } from "react";

import { Outlet } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import { Header } from "./Header";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Outlet />
      </LoginContext.Provider>
    </>
  );
}
