import React from "react";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
