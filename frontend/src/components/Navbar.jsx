import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleUser }) => {
  const [activeNavItem, setActiveNavItem] = useState("addSales");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    handleUser(null);
  };

  return (
    <div className="bg-primary">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            SALES APP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li
                className={`nav-item ${
                  activeNavItem === "addSales" ? "active" : ""
                }`}
              >
                <NavLink
                  className={`nav-link ${
                    activeNavItem === "addSales" ? "text-white" : ""
                  }`}
                  to="/"
                  onClick={() => handleNavItemClick("addSales")}
                >
                  ADD SALES
                </NavLink>
              </li>
              <li
                className={`nav-item ${
                  activeNavItem === "topSales" ? "active" : ""
                }`}
              >
                <NavLink
                  className={`nav-link ${
                    activeNavItem === "topSales" ? "text-white" : ""
                  }`}
                  to="/sales"
                  onClick={() => handleNavItemClick("topSales")}
                >
                  TOP 5 SALES
                </NavLink>
              </li>
              <li
                className={`nav-item ${
                  activeNavItem === "totalRevenue" ? "active" : ""
                }`}
              >
                <NavLink
                  className={`nav-link ${
                    activeNavItem === "totalRevenue" ? "text-white" : ""
                  }`}
                  to="/revenue"
                  onClick={() => handleNavItemClick("totalRevenue")}
                >
                  TODAY'S TOTAL REVENUE
                </NavLink>
              </li>
              {!user ? (
                <>
                  <li
                    className={`nav-item ${
                      activeNavItem === "login" ? "active" : ""
                    }`}
                  >
                    <NavLink
                      className={`nav-link ${
                        activeNavItem === "login" ? "text-white" : ""
                      }`}
                      to="/login"
                      onClick={() => handleNavItemClick("login")}
                    >
                      LOGIN
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item ${
                      activeNavItem === "register" ? "active" : ""
                    }`}
                  >
                    <NavLink
                      className={`nav-link ${
                        activeNavItem === "register" ? "text-white" : ""
                      }`}
                      to="/register"
                      onClick={() => handleNavItemClick("register")}
                    >
                      REGISTER
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={handleLogout}>
                    LOGOUT
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
