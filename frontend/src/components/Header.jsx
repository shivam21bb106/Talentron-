import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="bg-light py-1">
      <div className="m-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid header-className">
            <a href="#" className="navbar-brand d-none d-lg-block pe-5">
              <img
                src="src/assets/images/talentron_logo.png"
                alt="Talentron Logo"
                className="img-fluid desktop-logo-img"
              />
            </a>

            <a href="#" className="navbar-brand d-block d-lg-none">
              <img
                src="src/assets/images/T-logo.png"
                alt="Talentron Mobile Logo"
                className="img-fluid mobile-logo"
              />
            </a>

            <button
              type="button"
              className="navbar-toggler ms-auto"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active header-font-size" : "nav-item nav-link header-font-size"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/training-program"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active header-font-size" : "nav-item nav-link header-font-size"
                  }
                >
                  Training program
                </NavLink>
                <NavLink
                  to="/training-partner"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active header-font-size" : "nav-item nav-link header-font-size"
                  }
                >
                  Training Partner's
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active header-font-size" : "nav-item nav-link header-font-size"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active header-font-size" : "nav-item nav-link header-font-size"
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
