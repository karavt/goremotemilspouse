import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import { Container } from "semantic-ui-react";
import { browserHistory, Router, Route } from 'react-router';


class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <MainForm />
        <Route exact path="/quiz/" component={MainForm} />
      </Container>
    );
  }
}

export default App;
