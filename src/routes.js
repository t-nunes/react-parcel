import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import pages from "/pages";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={pages.Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
