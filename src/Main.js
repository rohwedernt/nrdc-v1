import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Code from "./Blog";
import Post from "./Post";

const style = {
    flex: '1 1 auto',
    padding: '30px 60px'
}

const Main = () => (
  <div className="this-is-main" style={style}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/code" component={Code} />
      <Route path="/music" />
      <Route path="/travel" />
      <Route path="/craftBeer" />
      <Route path="/post" component={Post} />
    </Switch>
  </div>
);

export default Main;
