import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from "./chat/Home";
import Contact from "./chat/Contact";
import Message from "./chat/Message";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
   return (
       <Router>
         <Route path="/" exact component={Home} />
         <Route path="/message" component={Message} />
         <Route path="/contact" component={Contact} />
       </Router>
   );
}

export default App;
