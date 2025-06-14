import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import RootWrapper from "./wrappers/RootWrapper.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import { isProduction } from "./hooks/helper.ts";
import NotFound from "./components/NotFound.tsx";

const productionRoutes: RouteObject[] = [
  {
    path: "",
    element: <ContactPage />,
  },
];

const devRoutes: RouteObject[] = [
  {
    path: "",
    element: <App />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },
];

const subroutes = isProduction() ? productionRoutes : devRoutes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
    children: subroutes,
  },

    {
    path: "*",
    element: <NotFound/>
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
