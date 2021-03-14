import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import "./Navbar.css";
import me from "../../../assets/me.png";
import { useHistory, BrowserRouter } from "react-router-dom";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  function burgerMenu() {
    setShowMenu(!showMenu);
  }

  const history = useHistory();
  console.log(history);

  function goHome() {
    console.log("go home");
    history.push("/home");
    setShowMenu(!showMenu);
  }
  function goAbout() {
    console.log("go about");
    history.push("/intro");
    setShowMenu(!showMenu);
  }
  function goPortfolio() {
    console.log("go portfolio");
    history.push("/portfolio");
    setShowMenu(!showMenu);
  }
  function goContact() {
    console.log("go portfolio");
    history.push("/contact");
    setShowMenu(!showMenu);
  }

  return (
    <div>
      {!showMenu ? (
        <navbar className="navbar">
          <div className="navbarImageAndText">
            <img alt="German Palero" src={me} className="navbarImage"></img>
            <p>GERMAN PALERO</p>
          </div>
          <div className="burgerMenuIcon">
            <MenuIcon fontSize="large" onClick={() => burgerMenu()}></MenuIcon>
          </div>
        </navbar>
      ) : (
        <navbar className="navbar2">
          <div className="navbarImageAndText2">
            <img alt="German Palero" src={me} className="navbarImage"></img>
            <p>GERMAN PALERO</p>
          </div>

          <ClearIcon
            fontSize="large"
            onClick={() => burgerMenu()}
            className="closingMenu"
          ></ClearIcon>
          <div className="linksMenu">
            <h1 className="linksMenuh1" onClick={() => goHome()}>
              HOME
            </h1>
            <h1 className="linksMenuh1" onClick={() => goAbout()}>
              ABOUT ME
            </h1>
            <h1 className="linksMenuh1" onClick={() => goPortfolio()}>
              PORTFOLIO
            </h1>
            <h1 className="linksMenuh1" onClick={() => goContact()}>
              CONTACT
            </h1>
          </div>
        </navbar>
      )}
    </div>
  );
}
