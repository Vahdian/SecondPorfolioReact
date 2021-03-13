import React from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "../../pages/intro/Intro";
import Home from "../../pages/home/Home";

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
      </Switch>
    </div>
  );
}
