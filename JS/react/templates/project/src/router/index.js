import React from "react";

// ROUTER
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import Error404 from "../views/Error404";
import Home from "../views/Home";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/error" />
      <Route path="/error404" component={Error404} />
      <Redirect to="/error404" />
    </Switch>
  );
}

export default Router;
