import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "../components/DashboardComponents/Dashboard";
import Sidebar from "../components/widgets/Navbar/Sidebar";

const DashboardRoutes = () => {
  return (
    <>
      <Sidebar />
      {/* <div>
        <Switch>
          <Route path="/home/dashboard" component={Dashboard} />
          <Redirect to="/home/dashboard" />
        </Switch>
      </div> */}
    </>
  );
};

export default DashboardRoutes;
