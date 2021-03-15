import React from "react";
import "./Intro.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import angular from "../../assets/angular.svg";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mongodb from "../../assets/mongodb.png";
import js from "../../assets/javascript.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";
import symfony from "../../assets/symfony.png";
import python from "../../assets/python.png";
import docker from "../../assets/docker.png";
import sass from "../../assets/sass.png";
import typescript from "../../assets/typescript.png";
import { useHistory } from "react-router";

export default function Intro() {
  /*  const history = useHistory();
  function next() {
    history.push("/portfolio");
  } */
  return (
    <div className="introSection">
      <div className="iconsDiv">
        <div className="iconAndText">
          <FormatPaintIcon
            fontSize="medium"
            className="imageIcon"
          ></FormatPaintIcon>
          <span className="spanIcons">Eye for design</span>
        </div>
        <div className="iconAndText">
          <BeenhereIcon fontSize="medium" className="imageIcon"></BeenhereIcon>
          <span className="spanIcons">Clean coding</span>
        </div>
        <div className="iconAndText">
          <EmojiObjectsIcon
            fontSize="medium"
            className="imageIcon"
          ></EmojiObjectsIcon>
          <span className="spanIcons">Creative mind</span>
        </div>
        <div className="iconAndText">
          <FavoriteIcon fontSize="medium" className="imageIcon"></FavoriteIcon>
          <span className="spanIcons">Passionate coder</span>
        </div>
      </div>
      <div className="textBoxIntro">
        <div className="textBoxIntro__h1">
          <h1>Hi! I am German, nice to meet you. Please take a look around!</h1>
        </div>
        <div className="textBoxIntro__p">
          <p>
            I am passionate about creating solutions for real world problems and
            improving everyone's life one step at a time. As a full stack
            developer I specialize in building apps and problem solving thinking
            outside the box. I am creative, curious, chilled and constantly
            trying to develop and nuture my understanding of the world around
            me.
          </p>
        </div>
      </div>
      <div className="tecnologiesDiv">
        <div className="tecnologyDiv">
          <img src={js} className="tecnologies__image"></img>
          <span className="tecnologyDivText">JS ES6</span>
        </div>
        <div className="tecnologyDiv">
          <img src={angular} className="tecnologies__image"></img>
          <span className="tecnologyDivText">Angular</span>
        </div>
        <div className="tecnologyDiv">
          <img src={react} className="tecnologies__image"></img>
          <span className="tecnologyDivText">React</span>
        </div>
        <div className="tecnologyDiv">
          <img src={node} className="tecnologies__image"></img>
          <span className="tecnologyDivText">NodeJS</span>
        </div>
        <div className="tecnologyDiv">
          <img src={typescript} className="tecnologies__image"></img>
          <span className="tecnologyDivText">Typescript</span>
        </div>
        <div className="tecnologyDiv">
          <img src={mongodb} className="tecnologies__image"></img>
          <span className="tecnologyDivText">MongoDb</span>
        </div>
        <div className="tecnologyDiv">
          <img src={php} className="tecnologies__image"></img>
          <span className="tecnologyDivText">PHP</span>
        </div>
        <div className="tecnologyDiv">
          <img src={symfony} className="tecnologies__image"></img>
          <span className="tecnologyDivText">Symfony</span>
        </div>
        <div className="tecnologyDiv">
          <img src={mysql} className="tecnologies__image"></img>
          <span className="tecnologyDivText">mysql</span>
        </div>
        <div className="tecnologyDiv">
          <img src={python} className="tecnologies__image"></img>
          <span className="tecnologyDivText">python</span>
        </div>

        <div className="tecnologyDiv">
          <img src={docker} className="tecnologies__image"></img>
          <span className="tecnologyDivText">Docker</span>
        </div>
        <div className="tecnologyDiv">
          <img src={sass} className="tecnologies__image"></img>
          <span className="tecnologyDivText">Sass</span>
        </div>
      </div>
      {/*  <KeyboardArrowDownIcon
        fontSize="large"
        className="homeDivArrow"
        onClick={() => next()}
      ></KeyboardArrowDownIcon> */}
    </div>
  );
}
