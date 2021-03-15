import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactPage">
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
