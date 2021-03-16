import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPageDiv">
      <h1>You can find me on...</h1>
      <p>germanpalero@gmail.com</p>
      <div className="location">
        <img className="location__image" src="https://www.freeiconspng.com/uploads/gray-location-icon-png-6.png"></img>
        <p>Madrid/London</p>
      </div>
      
      <form className="formSection">
        <input className="formSection__inputR" type="text" placeholder="Type your name here"></input>
        <input className="formSection__inputR" type="text" placeholder="Type your email here"></input>
        <input className="formSection__inputB" type="text" placeholder="Introduce your message here"></input>
        <input className="formSection__inputS" type="submit"></input>
      </form>
      </div>
      <div className="socialsDiv">
        <a
          classname="linkSocial"
          href="https://www.linkedin.com/in/germanpalero/"
        >
          <LinkedInIcon fontSize="large"></LinkedInIcon>
        </a>
      </div>
    </div>
  );
}
