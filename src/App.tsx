// dependency injection
import React from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";

//import styles
import "./App.css";

//import pages
//import { Login } from "./Config/pages";
import Login from "../src/Views/login.view";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path={"/"}>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
