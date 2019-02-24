import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import App from "../Containers/App";
import Login from "../Containers/Login";
import DashBoard from '../Containers/DashBoard'
import {Privateroutes}  from "./Privateroutes"

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/login" component={Login} />
        <Privateroutes exact path="/" component={App} />
        <Privateroutes exact path="/dashboard" component={DashBoard} />
    </div>
    </Router>
)

export default Routes