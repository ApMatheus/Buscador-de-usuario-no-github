import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from "./Home/index";
import Repositories from "./Repositories/index";

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/repositories" component={Repositories}/>
        </Switch>
    </BrowserRouter>
    )
}