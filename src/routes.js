import { Redirect, Route, Switch } from "react-router-dom";

import App from "./App";
import React from "react";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Home">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};
