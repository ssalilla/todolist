import React from "react";
import ConfigRoutes from "../Config/routes";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";

function privateRoutes(props) {
  const role = props.role || "guest";

  const allowedRoutes = ConfigRoutes[role].allowedRoutes;
  const redirectRoutes = ConfigRoutes[role].redirectRoutes;

  return (
    <BrowserRouter>
      <Switch>
        {allowedRoutes.map((route) => (
          <Route path={route.url} key={route.url} exact>
            <route.component setRole={props.setRole} />
          </Route>
        ))}
        <Redirect to={redirectRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default privateRoutes;
