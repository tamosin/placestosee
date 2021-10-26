import "./Navbar.css";
import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { ImCross } from "react-icons/im";
import { HiMenu } from "react-icons/hi";

import { useGlobalContext } from "../context";

import useWindowDimensions from "./useWindowDimensions";

function Navbar() {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  const nav = useRef(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (isMenuOpen || width > 768) {
      nav.current.style.display = "flex";
    } else {
      nav.current.style.display = "none";
    }
  }, [isMenuOpen, width]);

  const openMenuHandler = (e) => {
    return setIsMenuOpen(true);
  };

  const closeMenuHandler = (e) => {
    return setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        locs to see
      </Link>
      <nav ref={nav}>
        {isMenuOpen && (
          <ImCross className="close-menu-btn" onClick={closeMenuHandler} />
        )}
        <ul className="navbar-ul">
          <li className="navbar-li">
            <NavLink
              exact
              to="/"
              className="nav-item"
              activeClassName="active-item"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              to="/about"
              className="nav-item"
              activeClassName="active-item"
            >
              About
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              to="/contact"
              className="nav-item"
              activeClassName="active-item"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <Link to="/login" className="btn-login">
          Log In
        </Link>
      </nav>
      <HiMenu className="burger-btn" onClick={openMenuHandler} />
    </div>
  );
}

export default Navbar;
