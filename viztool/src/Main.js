import React from "react";
import { Switch, Route } from "react-router-dom";
import WorldMap from "./WorldMap.js";
import Countries from "./Countries.js";
import Collaborate from "./Collaborate.js";
function Main(){
    return(
        <Switch>
        <Route exact path="/" component={WorldMap} />
        <Route path="/Countries" component={Countries} />
        <Route path="/Collaborate" component={Collaborate} />
      </Switch>
    )
}
export default Main;



