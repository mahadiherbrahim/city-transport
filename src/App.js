import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Destination from "./Components/Destination/Destination";
import DestinationDetails from "./Components/DestinationDetails/DestinationDetails";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
          <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <PrivateRoute path="/destination/:name">
                <Destination/>
              </PrivateRoute>
              <PrivateRoute path="/destinationDetails/:transportName">
                <DestinationDetails></DestinationDetails>
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
