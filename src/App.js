import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { FirstPerson, SecondPerson, PersonSwitcher } from "./components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <PersonSwitcher />
          <Switch>
            <Route path="/" component={FirstPerson} exact />>
            <Route path="/first-person" component={FirstPerson} exact />>
            <Route path="/second-person" component={SecondPerson} exact />>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
