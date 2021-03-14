import React from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "../../pages/intro/Intro";
import Home from "../../pages/home/Home";
import Portfolio from "../../pages/portfolio/Portfolio";
import Contact from "../../pages/contact/Contact";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/intro">
          <Intro></Intro>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </div>
  );
}
