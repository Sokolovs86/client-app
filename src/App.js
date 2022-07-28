import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './chat/Home';
import Contact from './chat/Contact';
import Message from './chat/Message';

function App() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="message" component={Message}></Route>
      <Route path="contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
