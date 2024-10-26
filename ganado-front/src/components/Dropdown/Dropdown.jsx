import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const [showDrop, setshowDrop] = useState(true);
  const [showedDrop, setshowedDrop] = useState("");
  const toggleDropMenu = () => {
    setshowDrop(!showDrop);
    setshowedDrop(showDrop ? "show" : "");
  };
  return (
    <li
      className="nav-item dropdown"
      key={props.item.name}
      onMouseEnter={toggleDropMenu}
      onMouseLeave={toggleDropMenu}
    >
      <Link
        className="nav-link dropdown-toggle"
        to={props.item.link}
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        key={props.item.name}
      >
        {props.item.name}
      </Link>
      <div
        className={"dropdown-menu " + showedDrop}
        aria-labelledby="navbarDropdown"
      >
        {props.item.extras.map(function (data) {
          return (
            <Link
              className="dropdown-item"
              to={data.link}
              key={props.item.extras.name}
            >
              {data.name} <span className="sr-only"></span>
            </Link>
          );
        })}
      </div>
    </li>
  );
};

export default Dropdown;
