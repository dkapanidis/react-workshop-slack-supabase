import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorkspaceButton from './WorkspaceButton';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
