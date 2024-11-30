import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

export const Navbar = () => {
  const [show, setshow] = useState(true);
  const [showed, setshowed] = useState("");
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleMenu = () => {
    setshow(!show);
    setshowed(show ? "show" : "");
  };

  const toggleConstrast = ()  => {
    setIsHighContrast(!setIsHighContrast);
    document.body.classList.add("alto-contraste", !isHighContrast);
  };

  const menu = [
    {
      name: "Inicio",
      type: "normal",
      link: "/",
    },
    {
      name: "Ganado",
      type: "drop",
      link: "/ganado",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/ganado/listado",
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/ganado/agregar",
        },
      ],
    },
    {
      name: "Corrales",
      type: "drop",
      link: "/corrales",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/corrales/listado",
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/corrales/agregar",
        },
      ],
    },
    {
      name: "Personal",
      type: "drop",
      link: "/personal",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/personal/listado",
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/personal/agregar",
        },
      ],
    },
    {
      name: "Gastos",
      type: "drop",
      link: "/gastos",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/gastos/listado",
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/gastos/agregar",
        },
      ],
    },
    {
      name: "Ventas",
      type: "drop",
      link: "/ventas",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/ventas/listado",
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/ventas/agregar",
        },
      ],
    },
    {
      name: "Enfermedades",
      type: "drop",
      link: "/enfermedades",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/enfermedades/listado",
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/enfermedades/agregar",
        },
      ],
    },
    {
      name: "Reportes",
      type: "drop",
      link: "/reportes",
      extras: [
        {
          name: "Corrales",
          type: "normal",
          link: "/reportes/corrales",
        },
        {
          name: "Costos",
          type: "normal",
          link: "/reportes/costos",
        },
        {
          name: "Ganancias",
          type: "normal",
          link: "/reportes/ganancias",
        },
        {
          name: "Enfermedades",
          type: "normal",
          link: "/reportes/enfermedades",
        },
      ],
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark px-4">
        <Link className="navbar-brand" to={"/"}>
          <img src="/logo.jpg" alt="" className="nav-logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            "collapse navbar-collapse justify-content-between " + showed
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {menu.map(function (data) {
              return data.type == "normal" ? (
                <li className="nav-item active" key={data.name}>
                  <Link className="nav-link" to={"/"}>
                    {data.name} <span className="sr-only"></span>
                  </Link>
                </li>
              ) : (
                <Dropdown item={data} key={data.name} />
              );
            })}
          </ul>
          <div className="d-flex align-items-center">
            <button
            id="toggle-contrast"
            className="btn btn-outline-light mx-2"
            onClick={toggleConstrast}
            >
              {isHighContrast ? "Modo normal": "Modo alto contraste"}
            </button>
          <Link className="nav-link" to={"/login"}>
            Login
          </Link>
        </div>
        </div>
      </nav>
    </>
  );
};
