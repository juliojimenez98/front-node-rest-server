import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/HomePage/Home";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />

          <Route path="/" exact component={Home} />
          <Route path="/home" component={DashboardRoutes} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
