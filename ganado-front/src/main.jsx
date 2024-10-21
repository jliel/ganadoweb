import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App.jsx";
import "./App.css";
import Home from "./Home.jsx";
import ErrorPage from "./error-page.jsx";
import Login from "./Login.jsx";
import Ganado from "./pages/Ganado/Ganado.jsx";
import Listado from "./pages/Ganado/Listado.jsx";
import Agregar from "./pages/Ganado/Agregar.jsx";
import Editar from "./pages/Ganado/Editar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ganado",
        element: <Ganado />,
        children: [
          {
            path: "/ganado/listado",
            element: <Listado/>
          },
          {
            path: "/ganado/agregar",
            element: <Agregar/>
          },
          {
            path: "/ganado/editar/:id",
            element: <Editar/>
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
