import React from "react";
import "./Home.css";
import gp from "../../assets/icons/gpcolor.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useHistory } from "react-router";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Home() {
  const history = useHistory();
  function next() {
    history.push("/about");
  }
  return (
    <div className="homeDiv">
      <img className="divsZero" src={gp}></img>
      <h1 className="homeDivFull">FULL STACK DEVELOPER//</h1>
      <h1 className="homeDivFull2">GERMAN PALERO</h1>
      <h1 className="homeDivFull3">MADRID/LONDON</h1>
      <div className="fadeIn"></div>
      <KeyboardArrowDownIcon
        fontSize="large"
        className="homeDivArrow"
        onClick={() => next()}
      ></KeyboardArrowDownIcon>
    </div>
  );
}
