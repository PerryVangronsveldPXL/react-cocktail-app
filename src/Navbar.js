import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = {
    home: "/",
    favorites: "/favorites",
    about: "/about"
  };
  return (
    <nav className="navbar">
      <h1>Perry's Booze Lab</h1>
      <div className="links">
        <NavLink exact activeClassName="active" to={links.home}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to={links.favorites}>
          Favorites
        </NavLink>
        <NavLink activeClassName="active" to={links.about}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
