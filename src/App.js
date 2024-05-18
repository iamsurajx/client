import Main from "../src/pages/Main/Main.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // This includes the required JavaScript for Bootstrap components
import '@fortawesome/fontawesome-free/css/all.min.css';


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About/About.jsx";
import ChocolateSection from "./pages/ChocolateSection/ChocolateSection.jsx";
import ClientSection from "./pages/Testimonials/ClientSection.jsx";
import ContactSection from "./pages/ContactSection/ContactSection.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "chocolates",
    element: <ChocolateSection />,
  },
  {
    path: "testimonial",
    element: <ClientSection />,
  },
  {
    path: "contact",
    element: <ContactSection />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
