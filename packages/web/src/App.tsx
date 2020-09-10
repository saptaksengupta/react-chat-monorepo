import React, { useEffect } from "react";
import "./App.css";
import UserDetailsPage from "./pages/user-details/UserDetails";
import { initDatabase} from "@react-chat-monorepo/core";

// TODO: add dynamic imports
const App = (): any => {

  useEffect(() => {
    initDatabase().then((resp) => {
      console.log('Database initialised');
    }).catch((err) => {
      console.log('Error in init database');
    })
  })

  return (
    <div className="App">
        <UserDetailsPage />
    </div>
  );
}

export default App;
