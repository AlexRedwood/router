import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { v4 as uuidv4 } from "uuid";

const Navbar = (props) => {
  // Get quantity of all items added to cart by user
  function getItemsCount() {
    if (props.buyings.length > 0) {
      let count = 0;
      props.buyings.forEach((element) => {
        count += element.count;
      });

      return count < 100 ? count : "99+";
    }
    return null;
  }

  // Links for dropdown menus
  const weapons = Object.keys(props.items.weapons).map((name) => (
    <NavLink key={uuidv4()} to={`/shop/${name}`} className="dropdown-item">
      {name}
    </NavLink>
  ));

  const armor = Object.keys(props.items.armor).map((name) => (
    <NavLink key={uuidv4()} to={`/shop/${name}`} className="dropdown-item">
      {name}
    </NavLink>
  ));

  return (
    <nav
      id="nav"
      className="sticky navbar-dark  bg-dark fixed-top navbar navbar-expand-md "
    >
      {/* Brand */}
      <NavLink className="navbar-brand mx-lg-4 mx-0" to="/shop">
        <span id="brand">CRUSADE CALLS</span>
      </NavLink>
      {/* Shopping cart (not collapsing) */}
      <div className="d-flex cart-container navbar order-md-1 ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/shop/cart" className="nav-link">
              <i className="fas fa-shopping-cart mt-1">
                <span className="badge badge-pill badge-primary">
                  {getItemsCount()}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
      {/* Toggler/collapsibe Button  */}
      <button
        id="toggle-btn"
        className="navbar-toggler mr-lg-3"
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
              {weapons}
            </div>
          </li>

          {/* Second dropdown for armor */}
          <li className="nav-item dropdown ml-2">
            <span
              className="nav-link dropdown-toggle"
              id="armor-dropdown"
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
              aria-labelledby="armor-dropdown"
            >
              {armor}
            </div>
          </li>
          <div className="dropdown-divider"></div>
          <li className="nav-item ml-2">
            <Link to="/shop/about" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item ml-2 ">
            <Link to="/shop/contact" className="nav-link">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
