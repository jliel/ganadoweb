
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

export const Navbar = () => {
  const [show, setshow] = useState(true);
  const [showed, setshowed] = useState("");

  const toggleMenu = () => {
    setshow(!show);
    setshowed(show ? "show" : "");
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
          link: "/ganado/listado"
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/ganado/agregar"
        },
      ]
    },
    {
      name: "Ventas",
      type: "drop",
      link: "/ganado",
      extras: [
        {
          name: "Listado",
          type: "normal",
          link: "/ganado/listado"
        },
        {
          name: "Agregar",
          type: "normal",
          link: "/ganado/agregar"
        },
      ]
    },
  ];

  const applicants = [
    {
      name: "Joe",
      work: "freelance-developer",
      blogs: "54",
      websites: "32",
      hackathons: "6",
      location: "morocco",
      id: "0",
    },
    {
      name: "janet",
      work: "fullstack-developer",
      blogs: "34",
      websites: "12",
      hackathons: "8",
      location: "Mozambique",
      id: "1",
    },
  ];

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <Link className="navbar-brand" to={"/"}>
          Charolais
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
                
                <Dropdown item={data} key={data.name}/>
              );
            })}
            

          </ul>
        </div>
      </nav>
    </>
  );
};
