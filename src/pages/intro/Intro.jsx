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

export default function Intro() {
  return (
    <div className="introSection">
      <div className="iconsDiv">
        <div className="iconAndText">
          <FormatPaintIcon
            fontSize="large"
            className="imageIcon"
          ></FormatPaintIcon>
          <span>Eye for design</span>
        </div>
        <div className="iconAndText">
          <BeenhereIcon fontSize="large" className="imageIcon"></BeenhereIcon>
          <span>Clean code</span>
        </div>
        <div className="iconAndText">
          <EmojiObjectsIcon
            fontSize="large"
            className="imageIcon"
          ></EmojiObjectsIcon>
          <span>Creative</span>
        </div>
        <div className="iconAndText">
          <FavoriteIcon fontSize="large" className="imageIcon"></FavoriteIcon>
          <span>Passionate</span>
        </div>
      </div>
      <div className="textBoxIntro">
        <div className="textBoxIntro__h1">
          <h1>Hi I am German, nice to meet you. Please take a look around!</h1>
        </div>
        <div className="textBoxIntro__p">
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
      <div className="tecnologiesDiv">
        <div className="tecnologyDiv">
          <img src={js} className="tecnologies__image"></img>
          <span>JS ES6</span>
        </div>
        <div className="tecnologyDiv">
          <img src={angular} className="tecnologies__image"></img>
          <span>Angular</span>
        </div>
        <div className="tecnologyDiv">
          <img src={react} className="tecnologies__image"></img>
          <span>React</span>
        </div>
        <div className="tecnologyDiv">
          <img src={node} className="tecnologies__image"></img>
          <span>NodeJS</span>
        </div>
        <div className="tecnologyDiv">
          <img src={mongodb} className="tecnologies__image"></img>
          <span>MongoDb</span>
        </div>
        <div className="tecnologyDiv">
          <img src={php} className="tecnologies__image"></img>
          <span>PHP</span>
        </div>
        <div className="tecnologyDiv">
          <img src={symfony} className="tecnologies__image"></img>
          <span>Symfony</span>
        </div>
        <div className="tecnologyDiv">
          <img src={mysql} className="tecnologies__image"></img>
          <span>mysql</span>
        </div>
        <div className="tecnologyDiv">
          <img src={python} className="tecnologies__image"></img>
          <span>python</span>
        </div>
        <div className="tecnologyDiv">
          <img src={docker} className="tecnologies__image"></img>
          <span>Docker</span>
        </div>
        <div className="tecnologyDiv">
          <img src={sass} className="tecnologies__image"></img>
          <span>Sass</span>
        </div>
      </div>
      <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
    </div>
  );
}
