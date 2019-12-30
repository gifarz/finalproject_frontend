import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import About from "./Router/About";
import Profile from './UserProfile/UserProfile';
import NavBar from './Router/NavBar';
import {SignupForm} from './FormValidation/SignupForm';
import {SigninForm} from './FormValidation/SigninForm';
import Update from './API/FormHook/Update';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
 <Router>
  <NavBar/>  
  <Route exact path="/" component={App} />
  <Route path="/updatebook/:id" component={Update}/>
  <Route path="/about" component={About} />
  <Route path="/profile" component={Profile} />
  <Route path="/signup" component={SignupForm} />
  <Route path="/signin" component={SigninForm} />
 </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
