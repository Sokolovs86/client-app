import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./chat/Home";
import Contact from "./chat/Contact";
import Message from "./chat/Message";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="message" component={Message}></Route>
      <Route exact path="contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
