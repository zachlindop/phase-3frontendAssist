
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Games from "./components/Games.js"
import Home from "./components/Home.js"
import Homeform from "./components/Homeform.js"
import Navbar from "./components/Navbar"
import User from "./components/User"
import React from "react";
import Animated from "./components/videos/Animated.mp4";
import{ useEffect, useState } from 'react'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(){
  const[games, setGames] = useState( [] )
  console.log("State of Our Games:", games)
  useEffect( () => {
     fetch ("http://localhost:9292/games")
            .then((response) => response.json())
            .then(fetchedGames => {console.log(fetchedGames)
            setGames(fetchedGames)
          })
            
          }, [])

          const[users, setUsers] = useState( [] )
  console.log("State of Our Users:", users)
  useEffect( () => {
     fetch ("http://localhost:9292/users")
            .then((response) => response.json())
            .then(fetchedUsers => {console.log(fetchedUsers)
            setUsers(fetchedUsers)
          })
            
          }, [])

  
  return (
    <div className="App">
     
       
          
      
        
      <Navbar/>
      <Router>
      <div>
      <video autoPlay loop muted
        style = {{
          position: "fixed",
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
          <Route path="/games" component = {Games}>
           Games <Games gamedata = {games} />
          </Route>
          <Route path="/user" component = {User}>
            User <User userdata = {User} />
            <User />
          </Route>
          <Route path="/home" component = {Home}>
           home <Home homedata = {Home} />
           </Route>
           <Route path="/homeform" component = {Homeform}>
           homeform <Homeform homeformdata = {Homeform} />
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

export default App;
