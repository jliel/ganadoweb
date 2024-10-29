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
  },
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
    ],
  },
  {
    path: "/corrales",
    element: <Ganado />,
    children: [
      {
        path: "/corrales/listado",
        element: <Listado/>
      },
      {
        path: "/corrales/agregar",
        element: <Agregar/>
      },
      {
        path: "/corrales/editar/:id",
        element: <Editar/>
      },
    ],
    
  },
  {
    path: "/personal",
    element: <Ganado />,
    children: [
      {
        path: "/personal/listado",
        element: <Listado/>
      },
      {
        path: "/personal/agregar",
        element: <Agregar/>
      },
      {
        path: "/personal/editar/:id",
        element: <Editar/>
      },
    ],
  },
  {
    path: "/gastos",
    element: <Ganado />,
    children: [
      {
        path: "/gastos/listado",
        element: <Listado/>
      },
      {
        path: "/gastos/agregar",
        element: <Agregar/>
      },
      {
        path: "/gastos/editar/:id",
        element: <Editar/>
      },
    ],
  },
  {
    path: "/ventas",
    element: <Ganado />,
    children: [
      {
        path: "/ventas/listado",
        element: <Listado/>
      },
      {
        path: "/ventas/agregar",
        element: <Agregar/>
      },
      {
        path: "/ventas/editar/:id",
        element: <Editar/>
      },
    ],
  },
  {
    path: "/enfermedades",
    element: <Ganado />,
    children: [
      {
        path: "/enfermedades/listado",
        element: <Listado/>
      },
      {
        path: "/enfermedades/agregar",
        element: <Agregar/>
      },
      {
        path: "/enfermedades/editar/:id",
        element: <Editar/>
      },
    ],
  },
  {
    path: "/reportes",
    element: <Ganado />,
    children: [
      {
        path: "/reportes/costos",
        element: <Listado/>
      },
      {
        path: "/reportes/corrales",
        element: <Agregar/>
      },
      {
        path: "/reportes/ganancias",
        element: <Editar/>
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
    <RouterProvider router={router} />
);
