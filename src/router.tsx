import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./Components/App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route element={<About />} path="about" />
      <Route element={<Contact />} path="contact" />
    </Route>
  )
);
