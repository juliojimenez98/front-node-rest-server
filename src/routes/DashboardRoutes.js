import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "../components/DashboardComponents/Dashboard";
import Sidebar from "../components/widgets/Navbar/Sidebar";

const DashboardRoutes = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

export default DashboardRoutes;
