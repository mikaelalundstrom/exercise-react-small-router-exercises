import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App, ProtectedRoute } from "./Components";
import {
  About,
  Contact,
  Dashboard,
  Home,
  LogIn,
  NotFound,
  OldHome,
  Settings,
  Stats,
  UserProfile,
} from "./Components/Pages";
import { SignUp, Step1, Step2, Step3 } from "./Components/SignUpForm";

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
