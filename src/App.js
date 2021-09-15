
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Games from "./components/Games.js"
import Navbar from "./components/Navbar"
import User from "./components/User"
import React from "react";
import Animated from "./components/videos/Animated.mp4";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const fetchData = () => {
  return fetch("http://localhost:9292/")
        .then((response) => response.json())
        .then((data) => console.log(data));}

const App = () => {
  return (
    <div className="App">
    
      <Navbar/>
      <Router>
      <div>
      <video autoPlay loop muted
        style = {{
          position: "absolute",
          width: "100%", 
          left: "50%", 
          top: "50%", 
          height: "100%", 
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex:"-1"
        }}>
        
      <source src = {Animated} type = "video/mp4"/>
      </video>
      
     
      

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
fetchData();
export default App;
