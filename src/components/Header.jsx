import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [closeIcon,setCloseIcon] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
    setCloseIcon(false)
  };

  return (
    <div >
      <nav className="navbar navbar-expand-lg  navbar-bg">
        <div className="container-fluid navbar-bd-innner">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            TechLift<span>.pk</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={navbarOpen}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="" onClick={()=>setCloseIcon((prevState)=>!prevState)}>{closeIcon?<CloseIcon className="toggle-icon"/> : <MenuIcon className="toggle-icon" />}</span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo" onClick={closeNavbar}>
                  Todo App
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/netflix" onClick={closeNavbar}>
                  Netflix App
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
