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
import Corrales from "./pages/Corrales/Corrales.jsx";
import ListadoCorral from "./pages/Corrales/ListadoCorral.jsx";
import AgregarGanado from "./pages/Ganado/Agregar.jsx";
import AgregarCorral from "./pages/Corrales/Agregar.jsx";
import Personal from "./pages/Personal/Personal.jsx";
import ListadoPersonal from "./pages/Personal/Listado.jsx";
import AgregarPersonal from "./pages/Personal/Agregar.jsx";
import Gastos from "./pages/Gastos/Gastos.jsx";
import ListadoGastos from "./pages/Gastos/Listado.jsx";
import AgregarGastos from "./pages/Gastos/Agregar.jsx";
import Ventas from "./pages/Ventas/Ventas.jsx";
import ListadoVentas from "./pages/Ventas/Listado.jsx";
import AgregarVenta from "./pages/Ventas/Agregar.jsx";
import Enfermedades from "./pages/Enfermedades/Enfermedades.jsx";
import ListadoEnfermedades from "./pages/Enfermedades/Listado.jsx";
import AgregarEnfermedad from "./pages/Enfermedades/Agregar.jsx";
import EditarGanado from "./pages/Ganado/Editar.jsx";
import EditarCorral from "./pages/Corrales/Editar.jsx";
import EditarPersonal from "./pages/Personal/Editar.jsx";
import EditarGasto from "./pages/Gastos/Editar.jsx";
import EditarVenta from "./pages/Ventas/Editar.jsx";
import EditarEnfermedad from "./pages/Enfermedades/Editar.jsx";
import ReporteCorrales from "./pages/reportes/ReporteCorrales/ReporteCorrales.jsx";
import Reportes from "./pages/reportes/Reportes.jsx";

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
        element: <AgregarGanado/>
      },
      {
        path: "/ganado/editar/:id",
        element: <EditarGanado/>
      },
    ],
  },
  {
    path: "/corrales",
    element: <Corrales />,
    children: [
      {
        path: "/corrales/listado",
        element: <ListadoCorral/>
      },
      {
        path: "/corrales/agregar",
        element: <AgregarCorral/>
      },
      {
        path: "/corrales/editar/:id",
        element: <EditarCorral/>
      },
    ],
    
  },
  {
    path: "/personal",
    element: <Personal />,
    children: [
      {
        path: "/personal/listado",
        element: <ListadoPersonal/>
      },
      {
        path: "/personal/agregar",
        element: <AgregarPersonal/>
      },
      {
        path: "/personal/editar/:id",
        element: <EditarPersonal/>
      },
    ],
  },
  {
    path: "/gastos",
    element: <Gastos />,
    children: [
      {
        path: "/gastos/listado",
        element: <ListadoGastos/>
      },
      {
        path: "/gastos/agregar",
        element: <AgregarGastos/>
      },
      {
        path: "/gastos/editar/:id",
        element: <EditarGasto/>
      },
    ],
  },
  {
    path: "/ventas",
    element: <Ventas />,
    children: [
      {
        path: "/ventas/listado",
        element: <ListadoVentas/>
      },
      {
        path: "/ventas/agregar",
        element: <AgregarVenta/>
      },
      {
        path: "/ventas/editar/:id",
        element: <EditarVenta/>
      },
    ],
  },
  {
    path: "/enfermedades",
    element: <Enfermedades />,
    children: [
      {
        path: "/enfermedades/listado",
        element: <ListadoEnfermedades/>
      },
      {
        path: "/enfermedades/agregar",
        element: <AgregarEnfermedad/>
      },
      {
        path: "/enfermedades/editar/:id",
        element: <EditarEnfermedad/>
      },
    ],
  },
  {
    path: "/reportes",
    element: <Reportes />,
    children: [
      {
        path: "/reportes/costos",
        element: <ReporteCorrales/>
      },
      {
        path: "/reportes/corrales",
        element: <ReporteCorrales/>
      },
      {
        path: "/reportes/ganancias",
        element: <Editar/>
      },
      {
        path: "/reportes/enfermedades",
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
