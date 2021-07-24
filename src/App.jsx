import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./screens/Home";
import About from "./screens/About";
import Service from "./screens/Service";
import Contact from "./screens/Contact";
import Navig from "./components/Navbar";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import FloatingBtn from "./components/FloatingBtn";

const App = () =>{
  return(
    <BrowserRouter>
      <Navig />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <FloatingBtn />
    </BrowserRouter>
  );
};

export default App;