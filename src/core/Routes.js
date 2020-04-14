import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginScreen from "screens/Login";

const RoutesCore = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesCore;
