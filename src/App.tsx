// dependency injection
import React from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

//import pages
import { LoginPage } from "./Config/pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
