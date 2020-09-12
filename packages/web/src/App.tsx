import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import UserDetailsPage from "./pages/user-details/UserDetails";
import { initDatabase } from "@react-chat-monorepo/core";

// TODO: add dynamic imports
const App = (): any => {
  useEffect(() => {
    initDatabase()
      .then((resp) => {
        console.log("Database initialised");
      })
      .catch((err) => {
        console.log("Error in init database");
      });
  });

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='' component={UserDetailsPage} />
        <Route exact path='/hola' component={UserDetailsPage} />
        <Route exact path='/user/conversassions' component={UserDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
