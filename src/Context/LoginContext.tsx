import { createContext } from "react";

export const LoginContext = createContext<{
  isLoggedIn?: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
}>({});
