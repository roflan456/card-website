import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCloudsmith } from "react-icons/fa";
import { Button } from "../button/Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link className="navbar-logo" onClick={closeMobileMenu}>
              <FaCloudsmith className="navbar-icon" />
              SAVAGE
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Сервисы
                </Link>
              </li>
              <li className="nav-item"> 
                <Link
                  to="/product"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Наш продукт
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline">ВОЙТИ</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Войти
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
