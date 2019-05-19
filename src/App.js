import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import MainForm from "./containers/mainForm/MainForm";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainForm}/>
      <Route path="/cart" component={Cart}/>
    </Router>
  );
}

export default App;