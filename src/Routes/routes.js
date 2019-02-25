import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

// Components
import App from "../Containers/App";
import Login from "../Containers/Login";
import DashBoard from '../Containers/DashBoard'
import { Privateroutes } from "./Privateroutes"
import NotFound from "../Components/NotFound";
import Logout from "../Containers/Logout";

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Privateroutes exact path="/" component={DashBoard} />
        <Privateroutes exact path="/editor/:id" component={App} />
        <Privateroutes exact path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default Routes