import React from "react";
import "./Home.css";
import gp from "../../assets/icons/gpcolor.png";
export default function Home() {
  return (
    <div className="homeDiv">
      <img className="divsZero" src={gp}></img>
      <h1 className="homeDivFull">FULL STACK DEVELOPER</h1>
      <div className="fadeIn"></div>
    </div>
  );
}
