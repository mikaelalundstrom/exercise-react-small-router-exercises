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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route element={<About />} path="about" />
      <Route element={<Contact />} path="contact" />
      <Route element={<Dashboard />} path="dashboard">
        <Route element={<Stats />} path="stats" />
        <Route element={<Settings />} path="settings" />
      </Route>
      <Route element={<OldHome />} path="old-home" />
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
