import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import UserDetailsPage from "./pages/user-select/UserSelect";
import { initDatabase } from "@react-chat-monorepo/core";
import { UserSelectionContextProvider } from "@react-chat-monorepo/core";

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
        <UserSelectionContextProvider>
          <Route exact path="" component={UserDetailsPage} />
          <Route exact path="/hola" component={UserDetailsPage} />
        </UserSelectionContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
