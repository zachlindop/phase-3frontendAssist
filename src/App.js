
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Games from "./components/Games.js"
import Navbar from "./components/Navbar"
import User from "./components/User"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar">
      <Navbar/>
      <Router>
      <div>
  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/games" component = "{Games}">
            <Games />
          </Route>
          <Route path="/user" component = {User}>
            <User />
          </Route>
          <Route path="/navbar" component = {Navbar}>
            <navBar />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default NavBar;
