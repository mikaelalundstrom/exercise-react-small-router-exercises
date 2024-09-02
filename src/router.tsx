import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./Components/App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Stats from "./Components/Stats";
import Settings from "./Components/Settings";
import NotFound from "./Pages/NotFound";
import OldHome from "./Pages/OldHome";
import LogIn from "./Pages/LogIn";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserProfile from "./Components/UserProfile";
import SignUp from "./Components/SignUpForm/SignUp";
import Step1 from "./Components/SignUpForm/Step1";
import Step2 from "./Components/SignUpForm/Step2";
import Step3 from "./Components/SignUpForm/Step3";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route element={<About />} path="about" />
      <Route element={<Contact />} path="contact" />
      <Route element={<ProtectedRoute />}>
        <Route element={<Dashboard />} path="dashboard">
          <Route element={<Stats />} path="stats" />
          <Route element={<Settings />} path="settings" />
        </Route>
      </Route>
      <Route element={<LogIn />} path="log-in" />
      <Route element={<OldHome />} path="old-home" />
      <Route element={<UserProfile />} path="user/:id" />
      <Route element={<SignUp />} path="sign-up">
        <Route index element={<Step1 />} path="step-1" />
        <Route element={<Step2 />} path="step-2" />
        <Route element={<Step3 />} path="step-3" />
      </Route>

      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
