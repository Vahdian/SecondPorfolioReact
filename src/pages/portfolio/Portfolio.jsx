import React, { useState } from "react";
import "./Portfolio.css";
import TinderCard from "react-tinder-card";

const projects = [
  {
    name:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    tech: [
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687672/angular_rbk4kl.svg",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687692/sass_sb6cwu.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687692/typescript_webhne.png",
    ],
    image:
      "https://consultoriaseosevilla.es/wp-content/uploads/2018/10/ecommerce-sevilla01.jpg",
    Notes: "",
  },
  {
    name:
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615691956/change_w1pe9s.png",
    tech: [
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687681/mongodb_q5gwve.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615688457/express_bvzbtt.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687681/react_ieqoqh.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687683/node_ytah85.png",
    ],
    image:
      "https://www.spc.int/sites/default/files/styles/featured_image/public/featuredimages/events/2018-10/16Days.jpg?itok=9AP7l0bV",
    Notes: "",
  },
  {
    name:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png",
    tech: [
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687681/react_ieqoqh.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687692/sass_sb6cwu.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687674/bootsrap_p8iz4e.png",
    ],
    image:
      "https://i0.wp.com/cinemedios.com/wp-content/uploads/2020/07/game-of-thrones-secuela-miniserie-hbo.jpeg?fit=1024%2C640&ssl=1",
    Notes: "GoT",
  },
  {
    name:
      "https://2.bp.blogspot.com/-9wR610r9Dnc/We1vamR89II/AAAAAAAAGRY/6Wf_h_2mhrkoBJJekzJq2SZvNcM92ByCACLcBGAs/s1600/Schwifty.png",
    tech: [
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687672/angular_rbk4kl.svg",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687692/sass_sb6cwu.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687692/typescript_webhne.png",
    ],
    image:
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687331/rickandmorty_hpj97y.jpg",
    Notes: "Rick & Morty",
  },
  {
    name:
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615686409/cooltext378995265620614_mughcg.png",
    tech: [
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687681/mongodb_q5gwve.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615688457/express_bvzbtt.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687681/react_ieqoqh.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687683/node_ytah85.png",
    ],
    image:
      "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg",
    Notes: "Food Tinder",
  },
  {
    name:
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615685633/relocate3_apddor.png",
    tech: [
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687683/php_lhlaz2.png",
      "https://res.cloudinary.com/dvxczhzzt/image/upload/v1615687691/symfony_e4kzfl.png",
    ],
    image: "https://i.insider.com/5b64c0358ea82f32008b4d16?width=2241",
    Notes: "Relocate",
  },
];
export default function Portfolio() {
  console.log(require("../../assets/projects/relocate3.png"));
  const onSwipe = (direction) => {
    console.log("If you are really checking this you should hire me!");
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log("Yeah it works! Send me an email!");
  };

  return (
    <div className="PortfolioDiv">
      <h3 className="portfolioDivTitle">
        Hey! you can swipe through my most recent projects:
      </h3>
      <p className="portfolioDivText">Click on the images to check them out!</p>
      {projects.map((project, index) => (
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["up", "down"]}
          key={index}
          className="projectContainer"
        >
          <div>
            <div className="imageProjectDiv">
              <img src={project.image} className="imageProject"></img>
            </div>
            <img className="projectTitle" src={project.name} alt=""></img>
            <div className="techUsedDiv">
              <img className="techUsed" src={project.tech[0]}></img>
              {project.tech[1] ? (
                <img className="techUsed" src={project.tech[1]}></img>
              ) : (
                <span></span>
              )}
              {project.tech[2] ? (
                <img className="techUsed" src={project.tech[2]}></img>
              ) : (
                <span></span>
              )}
              {project.tech[3] ? (
                <img className="techUsed" src={project.tech[3]}></img>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
