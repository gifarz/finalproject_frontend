import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import About from "./Router/About";
import Profile from './Router/Profile';
import {SignupForm} from './FormValidation/SignupForm';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
 <Router>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
   >
    <span className="navbar-toggler-icon"></span>
   </button>

   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
      <Link className="navbar-brand" to="/">
       Home
      </Link>
     </li>
     <li className="nav-item">
      <Link className="navbar-brand" to="/about">
       About
      </Link>
     </li>
     <li className="nav-item">
      <Link className="navbar-brand" to="/profile">
       Profile
      </Link>
     </li>
     <li className="nav-item">
      <Link className="navbar-brand" to="/signup">
       Signup
      </Link>
     </li>
    </ul>
   </div>
  </nav>
  <Route exact path="/" component={App} />
  <Route path="/about" component={About} />
  <Route path="/profile" component={Profile} />
  <Route path="/signup" component={SignupForm} />

 </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
