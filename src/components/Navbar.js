import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar-light fixed-top navbar navbar-expand-md bg-light">
      {/* Brand */}
      <NavLink className="navbar-brand mx-4" to="/">
        <span id="brand">CRUSADE CALLS</span>
      </NavLink>

      {/* Shopping cart (not collapsing) */}
      <div className="d-flex cart-container navbar order-md-1 ml-auto mr-3">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggler/collapsibe Button  */}
      <button
        id="toggle-btn"
        className="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#navlist"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navlist">
        <ul className="navbar-nav text-right">
          {/* First dropdown for weapons */}
          <li className="nav-item dropdown ml-2">
            <span
              className="nav-link dropdown-toggle"
              id="weapons-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Weapons
            </span>
            {/* Dropwdown items */}
            <div
              className="dropdown-menu text-right"
              aria-labelledby="weapons-dropdown"
            >
              <Link className="dropdown-item">Swords</Link>
              <Link className="dropdown-item">Maces</Link>
              <Link className="dropdown-item">Polearms</Link>
              <Link className="dropdown-item">Bows</Link>
            </div>
          </li>

          {/* Second dropdown for armor */}
          <li className="nav-item dropdown ml-2">
            <span
              className="nav-link dropdown-toggle"
              id="weapons-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Armor
            </span>
            {/* Dropwdown items */}
            <div
              className="dropdown-menu text-right"
              aria-labelledby="weapons-dropdown"
            >
              <Link className="dropdown-item">Helmets</Link>
              <Link className="dropdown-item">Pauldrons</Link>
              <Link className="dropdown-item">Body armor</Link>
              <Link className="dropdown-item">Hand armor</Link>
              <Link className="dropdown-item">Leg armor</Link>
              <Link className="dropdown-item">Shields</Link>
            </div>
          </li>
          <div className="dropdown-divider"></div>
          <li className="nav-item ml-2">
            <Link className="nav-link">About us</Link>
          </li>
          <li className="nav-item ml-2 ">
            <Link className="nav-link">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
